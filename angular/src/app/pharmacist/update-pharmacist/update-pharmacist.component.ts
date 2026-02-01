
import { Component, OnInit } from '@angular/core';
import { PharmacistService } from '../../service/pharmacist.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-pharmacist',
  templateUrl: './update-pharmacist.component.html',
  styleUrls: ['./update-pharmacist.component.css'],
  standalone: false,
})
export class UpdatePharmacistComponent implements OnInit {
  myForm!: FormGroup;
  errorMessage: string = '';
  id!: number;

  constructor(private _pharmacistService: PharmacistService, private router: Router) { }

  ngOnInit(): void {
    this.id = Number(localStorage.getItem('pharmacistId'));

    this.myForm = new FormGroup({
      password: new FormControl('password', Validators.required),
    });
  }

  update() {
    if (this.myForm.invalid) {
      this.errorMessage = 'Password is required!';
      return;
    }

    this._pharmacistService.putPharmacist(this.myForm.value, this.id).subscribe({
      next: (res) => {
        console.log('res', res);
        Swal.fire({
          icon: 'success',
          title: 'success',
          text: 'pharmacist update  successfully',
          confirmButtonText: 'submit'
        });
      },
      error: (err) => {
        console.log('err', err);
        this.errorMessage = 'Failed to update password. Please try again.';
      },
    });
  }

  back() {
    this.router.navigate(['/pharmacist/homePharmacist'])
  }
}

