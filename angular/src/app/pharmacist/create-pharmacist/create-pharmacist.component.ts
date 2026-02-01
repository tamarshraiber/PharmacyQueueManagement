import { Component, OnInit } from '@angular/core';
import { PharmacistService } from '../../service/pharmacist.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-pharmacist',
  templateUrl: './create-pharmacist.component.html',
  styleUrl: './create-pharmacist.component.css',
  standalone: false,
})
export class CreatePharmacistComponent {

  newPharmacist = {
    name: '',
    password: String(localStorage.getItem('passwordAuto')),
    pharmacyId: Number(localStorage.getItem('pharmacyId')),
  };

  myForm!: FormGroup;
  errorMessage!: '';

  constructor(private _pharmacistService: PharmacistService, private router: Router) {
    this.myForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl(localStorage.getItem('passwordAuto')),
      pharmacyId: new FormControl(Number(localStorage.getItem('pharmacyId'))),
    });
  }

  createPharmacist() {
    if (this.myForm.invalid) {
      return;
    }

    this._pharmacistService.addPharmacist(this.myForm.value).subscribe({
      next: (res) => {
        console.log('res', res);
        this.newPharmacist = res;

        Swal.fire({
          icon: 'success',
          title: 'success!',
          text: 'The addition was successful.',
          confirmButtonText: 'submit'
        });
        this.myForm.get('name')?.reset();
      },
      error: (err) => {
        console.log('err', err);
        this.errorMessage = err;
      },
    });
  }


  back() {
    this.router.navigate(['pharmacy/homeAdmin']);
  }
}
