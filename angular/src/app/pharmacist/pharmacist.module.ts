
import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PharmacistRoutingModule } from './pharmacist-routing.module';

import { CreatePharmacistComponent } from './create-pharmacist/create-pharmacist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePharmacistComponent } from './update-pharmacist/update-pharmacist.component';
import { LoginPharmacistComponent } from './login-pharmacist/login-pharmacist.component';
import { HomePharmacistComponent } from './home-pharmacist/home-pharmacist.component';
import { ShowStationComponent } from './show-station/show-station.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { _MatCheckboxRequiredValidatorModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [CreatePharmacistComponent,
    UpdatePharmacistComponent,
    LoginPharmacistComponent,
    HomePharmacistComponent,
    ShowStationComponent,  
  ],
  imports: [
    CommonModule,
    PharmacistRoutingModule,
    FormsModule,
    NgClass,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    ReactiveFormsModule,
    _MatCheckboxRequiredValidatorModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],  
})
export class PharmacistModule { }
