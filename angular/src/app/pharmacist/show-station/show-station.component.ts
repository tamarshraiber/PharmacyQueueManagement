import { Component, OnInit } from '@angular/core';
import { PharmacistService } from '../../service/pharmacist.service';
import { PharmacyService } from '../../service/pharmacy.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Station } from '../../models/station.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-station',
  templateUrl: './show-station.component.html',
  styleUrl: './show-station.component.css',
  standalone: false,
})
export class ShowStationComponent implements OnInit {

  errorMessage = "";

  myForm!: FormGroup;
  pharmacyID!: number;
  stations!: Station[] | null;

  ngOnInit(): void {

    this.pharmacyID = Number(localStorage.getItem('pharmacyId'));
    console.log(this.pharmacyID);


    this._pharmacistService.getStation(this.pharmacyID).subscribe({
      next: (res) => {
        if (!res || res.length === 0) {
          Swal.fire({
            icon: 'warning',
            title: 'No Data Found',
            text: 'No stations found for this pharmacy.',
            confirmButtonText: 'OK'
          });
          return;
        }
        console.log('res', res);
        this.stations = res;
      },
      error: (err) => {
        console.log('err', err);
        this.errorMessage = err;
      },
    });
  }

  constructor(
    private _pharmacistService: PharmacistService,
    private _pharmacyService: PharmacyService,
    private router: Router
  ) {
    this.myForm = new FormGroup({
      id: new FormControl(0, [Validators.required]),
      pharmacistId: new FormControl(Number(localStorage.getItem('pharmacistId')), [Validators.required]),
    });
  }

  update(id: number) {
    if (this.myForm.invalid) {
      this.errorMessage = 'Password is required!';
      return;
    }
    this.myForm.get('id')?.setValue(id);
    this._pharmacistService.putStation(this.myForm.value, id).subscribe({

      next: (res) => {
        console.log('(●', '●)', this.myForm.value);
        console.log('res', res);

        Swal.fire({
          title: 'Success!',
          text: 'You have successfully logged in to the station.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
       if(res.isActive){       
         this.router.navigate(['queue/dequeue']);
      }else {
        this.router.navigate(['/pharmacist/homePharmacist']);
      }
      },
      error: (err) => {
        console.log('err', err);
        this.errorMessage = 'Failed to update password. Please try again.';
      },
    });


  }



  back() {
    this.router.navigate(['/pharmacist/homePharmacist']);
  }

}
