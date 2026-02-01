import { Component, OnInit } from '@angular/core';
import { QueueService } from '../../service/queue.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-dequeue',
  templateUrl: './dequeue.component.html',
  styleUrl: './dequeue.component.css',
  standalone: false,
})
export class DequeueComponent{

  num!: number;
  errorMessage = '';
  pharmacyId = localStorage.getItem('pharmacyId')
  numQueue='';


  constructor(private _queueService: QueueService, private router: Router) { }
  removeFromQueue() {
    if (Number(this.pharmacyId)) {

      this._queueService.remove(Number(this.pharmacyId)).subscribe({

        next: (res) => {
          console.log('res', res);
          this.num = Number(res);
          console.log('num', this.num);

          let num=Number(res);
          let type = num % 10;
          
          num=Math.floor(num/10) ;
          var s=String(num);
           console.log(type,'type');
          
          if (type==1){
            this.numQueue = 'S'.concat(s);
           
          }
          if (type==2){
            this.numQueue = 'R'.concat(s);
            
          }

          



          Swal.fire({
            icon: 'info',
            title: 'Next in line:',
            text: `The next item is: ${this.numQueue}`,
            confirmButtonText: 'OK'
          });
        },
        error: (err) => {
          console.log('err', err);
          this.errorMessage = 'Failed to update password. Please try again.';
        },
      });
    }
  }

  back() {
    this.router.navigate(['/pharmacist/homePharmacist'])
  }

}
