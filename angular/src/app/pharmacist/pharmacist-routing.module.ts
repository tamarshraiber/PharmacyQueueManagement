

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePharmacistComponent } from './create-pharmacist/create-pharmacist.component';
import { UpdatePharmacistComponent } from './update-pharmacist/update-pharmacist.component';
import { LoginPharmacistComponent } from './login-pharmacist/login-pharmacist.component';
import { HomePharmacistComponent } from './home-pharmacist/home-pharmacist.component';
import { ShowStationComponent } from './show-station/show-station.component';

const routes: Routes = [

  { path: 'homePharmacist', component: HomePharmacistComponent },
  { path: 'showStation', component: ShowStationComponent },

  { path: 'createPharmacist', component: CreatePharmacistComponent },
  { path: 'updatePharmacist', component: UpdatePharmacistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacistRoutingModule {}
