import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pharmacist',
  templateUrl: './login-pharmacist.component.html',
  styleUrl: './login-pharmacist.component.css',
  standalone: false,
})
export class LoginPharmacistComponent {
  myForm!: FormGroup;
  errorMessage = '';

  constructor(private _authService: AuthService, private router: Router) {
    this.myForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}'),
      ])

    })
  }

  loginPharmacy() {
    if (!this.myForm.invalid) {
      this._authService.pharmacistLogin(this.myForm.value)
        .subscribe({
          next: (res) => {
            console.log('res', res);
            localStorage.setItem('token', res.token);
            localStorage.setItem('pharmacistId', res.pharmacist.id);
            localStorage.setItem('pharmacist', res.pharmacist.name);
            if (!localStorage.getItem('pharmacyId')) {
              localStorage.setItem('pharmacyId', res.pharmacist.pharmacyId);
            }
            this.router.navigate(['/pharmacist/homePharmacist'])
          },
          error: (err) => {
            console.log('err', err);
            this.errorMessage = err;
          }
        })
    }
  }

  back() {
    this.router.navigate(['']);
  }
}

