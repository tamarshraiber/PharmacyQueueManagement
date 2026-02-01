import { Component, OnInit } from '@angular/core';
import { QueueService } from '../../service/queue.service';
import { PatientQueue, SpecialQueue } from '../../models/queue.model';
import { _MatCheckboxRequiredValidatorModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queue-status',
  templateUrl: './queue-status.component.html',
  styleUrl: './queue-status.component.css',
  standalone: false,
})
export class QueueStatusComponent implements OnInit {
  errorMessage = '';
  pQueue!: PatientQueue[] | null;
  sQueue!: SpecialQueue[] | null;
  pharmacyID!: number;

  ngOnInit(): void {
    this.pharmacyID = Number(localStorage.getItem('pharmacyId'));
    if (!this.pharmacyID) console.log('no pharmacyId');
    this._queueService.patientQueue(this.pharmacyID).subscribe({
      next: (res) => {
        console.log('res', res);
        this.pQueue = res;
        this.pQueue = this.pQueue.sort((a, b) => a.number - b.number);
      },
      error: (err) => {
        if (err.status == 404) {
          this.errorMessage = 'the queue is empty';
        } else {
          console.log('err', err);
          this.errorMessage = err;
        }
      },
    });

    this._queueService.specialQueue(this.pharmacyID).subscribe({
      next: (res) => {
        console.log('res', res);
        this.sQueue = res;
        this.sQueue = this.sQueue.sort((a, b) => a.number - b.number);
      },
      error: (err) => {
        if (err.status == 404) {
          this.errorMessage = 'the queue is empty';
          console.log(this.errorMessage);
        } else {
          console.log('err', err);
          this.errorMessage = err;
        }
      },
    });
  }

  constructor(private _queueService: QueueService, private router: Router) { }

  back() {
    this.router.navigate(['pharmacy/homeAdmin']);
  }
}
