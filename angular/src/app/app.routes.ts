import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth.guard';
import { LoginAdminComponent } from './pharmacy/login-admin/login-admin.component';
import { LoginPharmacistComponent } from './pharmacist/login-pharmacist/login-pharmacist.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'loginPhararmacist', component: LoginPharmacistComponent },
  { path: 'loginPharmacy', component: LoginAdminComponent },
  { path: 'pharmacist', loadChildren: () => import('./pharmacist/pharmacist.module').then((m) => m.PharmacistModule), canActivate: [authGuard], },
  { path: 'pharmacy', loadChildren: () => import('./pharmacy/pharmacy.module').then((m) => m.PharmacyModule), canActivate: [authGuard], },
  { path: 'queue', loadChildren: () => import('./queue/queue.module').then((m) => m.QueueModule) },
  { path: '**', component: NotFoundComponent },
];
