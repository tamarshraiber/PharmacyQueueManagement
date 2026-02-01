import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { UpdatePharmacyComponent } from './update-pharmacy/update-pharmacy.component';
import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { _MatCheckboxRequiredValidatorModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [UpdatePharmacyComponent, HomeAdminComponent, LoginAdminComponent],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    FormsModule,
    NgClass,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    _MatCheckboxRequiredValidatorModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,

  ]
})
export class PharmacyModule { }



