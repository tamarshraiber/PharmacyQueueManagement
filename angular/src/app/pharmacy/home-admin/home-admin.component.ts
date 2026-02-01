import { Component, OnInit, Output, EventEmitter, output } from '@angular/core';
import { PharmacyService } from '../../service/pharmacy.service';
import { Router } from '@angular/router';
import { Pharmacist } from '../../models/pharmacist.model';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css',
  standalone: false,
})
export class HomeAdminComponent implements OnInit {
  pharmacyId = Number(localStorage.getItem('pharmacyId'));
  show = false;
  pharmacists!: Pharmacist[] | undefined;
  errorMessage = '';
  name!: string;

  ngOnInit(): void {
    this.name = String(localStorage.getItem('admin'));
  }


  constructor(private _pharmacyServic: PharmacyService, private _pharmacistService: PharmacyService, private router: Router) {
  }


  delete() {
    console.log('id: ', this.pharmacyId);

    this._pharmacyServic.deletePharmacy(this.pharmacyId).subscribe({
      next: (res) => {
        console.log('res', res);

        Swal.fire({
          title: 'Success!',
          text: 'The pharmacy has been successfully deleted.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.router.navigate(['']);

      },
      error: (err) => {
        console.log('err', err);
        this.errorMessage = err;
      }
    })

  }

  showPharmacist() {
    this._pharmacyServic.getPharmacists(this.pharmacyId).subscribe({
      next: (res) => {
        console.log('res', res);
        this.pharmacists = res;
        this.show = true;
      },
      error: (err) => {
        console.log('err', err);
        this.errorMessage = err;
      }
    })

  }

  close() {
    this.show = false;
  }

  deletePharmacist(id: number) {
    this._pharmacistService.deletePharmacist(id)
      .subscribe({
        next: (res) => {
          console.log('res', res);
          this.pharmacists = this.pharmacists?.filter(pharmacist => pharmacist.id !== id);
          this.ngOnInit();
          Swal.fire({
            title: 'Success!',
            text: 'The pharmacist has been successfully deleted.',
            icon: 'success',
            confirmButtonText: 'OK'
          });

        },
        error: (err) => {
          console.log('err', err);
          this.errorMessage = err;
        }
      })


  }

  reset() {
    this._pharmacyServic.resetQueue(this.pharmacyId).subscribe({
      next: (res) => {
        console.log('res', res);
        Swal.fire({
          title: 'Success!',
          text: 'The queue reset successfully .',
          icon: 'success',
          confirmButtonText: 'OK'
        });

      },
      error: (err) => {
        console.log('err', err);
        this.errorMessage = err;
      }
    })

  }

  createPharmacist() {
    this.router.navigate(['pharmacist/createPharmacist']);
  }

  update() {
    this.router.navigate(['pharmacy/updatePharmacy']);
  }

  statusQueue() {
    this.router.navigate(['queue/queueStatus']);
  }

  showQueues() {
    this.router.navigate(['queue/queueStatus']);
  }
  userInterface() {
    this.router.navigate(['queue/enqueue']);
  }
}
