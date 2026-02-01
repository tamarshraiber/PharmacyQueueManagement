import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pharmacist, putPharmacist, PharmacistAdd } from '../models/pharmacist.model';
import { Station, StationToSend } from '../models/station.model';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {

  $source: Observable<number> = new Observable<number>((observer) => {
    observer.next(1);
    observer.complete();
    observer.error();
  })


  constructor(private _httpClient: HttpClient) { }

  getPharmacistFromServer(): Observable<Pharmacist[]> {
    return this._httpClient.get<Pharmacist[]>('https://localhost:7265/api/Pharmacist');
  }

  getPharmacistById(id: number): Observable<Pharmacist> {
    return this._httpClient.get<Pharmacist>(`https://localhost:7265/api/Pharmacist/${id}`)
  }

  deletePharmacist(id: number): Observable<void> {
    return this._httpClient.delete<void>(`https://localhost:7265/api/Pharmacist/${id}`)
  }

  addPharmacist(addPharmacist: PharmacistAdd): Observable<Pharmacist> {
    return this._httpClient.post<Pharmacist>('https://localhost:7265/api/Pharmacist', addPharmacist);
  }


  putPharmacist(pharmacist: putPharmacist, id: number): Observable<Pharmacist> {
    return this._httpClient.put<Pharmacist>(`https://localhost:7265/api/Pharmacist/${id}`, pharmacist)
  }

  putStation(station: StationToSend, id: number): Observable<Station> {
    console.log(station);

    return this._httpClient.put<Station>(`https://localhost:7265/api/Station/${id}`, station)

  }
  getStation(id: number): Observable<Station[]> {
    return this._httpClient.get<Station[]>(`https://localhost:7265/api/Station/byPharmacy/${id}`)
  }


}

