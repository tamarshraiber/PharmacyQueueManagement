import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pharmacist } from '../models/pharmacist.model';
import { Pharmacy, putPharmacy } from '../models/pharmacy.model';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  $source: Observable<number> = new Observable<number>((observer) => {
    observer.next(1);
    observer.complete();
    observer.error();
  })

  constructor(private _httpClient: HttpClient) { }


  addPharmacy(pharmacy: Pharmacy): Observable<Pharmacy> {
    return this._httpClient.post<Pharmacy>('https://localhost:7265/api/Pharmacy', pharmacy);
  }

  putPharmacy(id: number, pharmacy: putPharmacy): Observable<Pharmacy> {
    return this._httpClient.put<Pharmacy>(`https://localhost:7265/api/Pharmacy/${id}`, pharmacy);
  }

  deletePharmacy(id: number): Observable<void> {
    return this._httpClient.delete<void>(`https://localhost:7265/api/Pharmacy/${id}`);
  }

  getPharmacists(id: number): Observable<Pharmacist[]> {
    return this._httpClient.get<Pharmacist[]>(`https://localhost:7265/api/Pharmacist/GetAcordungToPharmacy?pharmacyId=${id}`);
  }


  deletePharmacist(id: number): Observable<void> {
    return this._httpClient.delete<void>(`https://localhost:7265/api/Pharmacist/${id}`);
  }

  addRegularQueue(id: number): Observable<void> {
    return this._httpClient.post<void>(`https://localhost:7265/api/Pharmacy/patient/${id}`, id);
  }

  addSpecialQueue(id: number): Observable<void> {
    return this._httpClient.post<void>(`https://localhost:7265/api/Pharmacy/special/${id}`, id);
  }

  removeQueue(id: number): Observable<void> {
    return this._httpClient.delete<void>(`https://localhost:7265/api/Pharmacy/removePatient/${id}`);
  }

  resetQueue(id: number): Observable<void> {
    return this._httpClient.get<void>(`https://localhost:7265/api/Update/${id}`);

  }


}


