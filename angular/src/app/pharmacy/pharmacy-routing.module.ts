import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatePharmacyComponent } from './update-pharmacy/update-pharmacy.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';


const routes: Routes = [
  { path: 'homeAdmin', component: HomeAdminComponent },
  { path: 'updatePharmacy', component: UpdatePharmacyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }