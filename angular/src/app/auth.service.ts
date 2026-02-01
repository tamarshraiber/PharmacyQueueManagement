import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { loginAdmin, Pharmacy } from './models/pharmacy.model';
import { HttpClient } from '@angular/common/http';
import { loginPharmacist } from './models/pharmacist.model';
import { Logger } from 'html2canvas/dist/types/core/logger';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

  constructor(private _httpClient: HttpClient) { }
  get isAuthenticated(): boolean {
    return this.isAuthenticated$.getValue();

  }



  get userRole(): string | null {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(token).role : null; // מחזיר את ה-role
  }



  pharmacistLogin(loginPharmacist: loginPharmacist): Observable<any> {
    let token = this._httpClient.post<any>('https://localhost:7265/PharmacistLogin', loginPharmacist);
    this.isAuthenticated$.next(true);
    return token;
  }
  pharmacyLogin(loginAdmin: loginAdmin): Observable<any> {
    let token = this._httpClient.post<any>('https://localhost:7265/PharmacyLogin', loginAdmin);

    const userRole = 'Admin';
    this.isAuthenticated$.next(true);
    return token;
  }

  signup(pharmacy: Pharmacy): Observable<any> {
    let token = this._httpClient.post<any>('https://localhost:7265/signup', pharmacy);
    this.isAuthenticated$.next(true);
    return token;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated$.next(false);
  }
}
