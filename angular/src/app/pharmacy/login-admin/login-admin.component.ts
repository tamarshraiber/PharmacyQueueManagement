import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css',
  standalone: false,

})
export class LoginAdminComponent {
  myForm!: FormGroup;
  errorMessage = '';


  constructor(private _authService: AuthService, private router: Router) {
    this.myForm = new FormGroup({
      manager: new FormControl('', [
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
      this._authService.pharmacyLogin(this.myForm.value)
        .subscribe({
          next: (res) => {
            console.log('res', res);
            localStorage.setItem('token', res.token);
            localStorage.setItem('pharmacyId', res.pharmacy.id);
            localStorage.setItem('passwordAuto', res.pharmacy.pharmacyPassword);
            localStorage.setItem('admin', res.pharmacy.manager);
            this.router.navigate(['/pharmacy/homeAdmin'])

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











