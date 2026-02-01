

import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../service/pharmacy.service';
import { Router } from '@angular/router';
import { putPharmacy } from '../../models/pharmacy.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-pharmacy',
  templateUrl: './update-pharmacy.component.html',
  styleUrl: './update-pharmacy.component.css',
  standalone: false,
})
export class UpdatePharmacyComponent {

  putPharmacy = {
    password: ' ',
    stationCount: -1,
    pharmacyPassword: '',
  }
  errorMessage = ' ';
  pharmacyId = Number(localStorage.getItem('pharmacyId'));


  myForm!: FormGroup;

  constructor(private _pharmacyService: PharmacyService, private router: Router) {
    this.myForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),  
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}'),  
      ]),
      stationCount: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
      pharmacyPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),  
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}'),  
      ]),
    })
  }

  update() {

    if (!this.myForm.invalid) {

      this._pharmacyService.putPharmacy(this.pharmacyId, this.myForm.value)
        .subscribe({
          next: (res) => {
            console.log('res', res);
            Swal.fire({
              icon: 'success',
              title: 'success',
              text: 'pharmacy update  successfully',
              confirmButtonText: 'submit'
            });

          },
          error: (err) => {
            console.log('err', err);
            this.errorMessage = err;
          }
        })
    }
  }

  back() {
    this.router.navigate(['pharmacy/homeAdmin']);
  }

}
