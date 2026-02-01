import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmacyService } from '../service/pharmacy.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { _MatCheckboxRequiredValidatorModule } from '@angular/material/checkbox';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    _MatCheckboxRequiredValidatorModule,

  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit{
newPharmacy = {
  manager: '',
  stationCount: 0,
  password: '',
  pharmacyPassword:'',
};


  myForm!: FormGroup;
  errorMessage='';
  ngOnInit(): void {
  }
  constructor(private _pharmacyServise: PharmacyService,private router: Router,private _autServics:AuthService){
    this.myForm=new FormGroup({
      manager: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
      ]),
      stationCount: new FormControl('',[
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(8),  
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}'),  // כל הקריטריונים
      ]),
      pharmacyPassword: new FormControl(''.replace(/\\/g, ''),[
        Validators.required,
        Validators.minLength(8),  
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}'),  // כל הקריטריונים
      ])

    })
  }
  createPharmacy(){
    if(! this.myForm.invalid){
      this._autServics.signup(this.myForm.value).subscribe({
        next: (res)=>{
          console.log('res', res);
          this.newPharmacy=res;
          localStorage.setItem('token', res.token);
          localStorage.setItem('pharmacyId',res.pharmacy.id);
          localStorage.setItem('passwordAuto', res.pharmacy.pharmacyPassword);
          localStorage.setItem('admin', res.pharmacy.manager);

          Swal.fire({
            title: 'Registration Successful!',
            text: 'You have registered successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.router.navigate(['/pharmacy/homeAdmin']);
        },
        error:(err)=>{
          console.log('err',err);
          this.errorMessage=err;
        }
      })
    }
    }

}
