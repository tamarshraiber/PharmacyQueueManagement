import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientQueue, Queue, SpecialQueue } from '../models/queue.model';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  $source: Observable<number> = new Observable<number>((observer) => {
    observer.next(1);
    observer.complete();
    observer.error();
  })

  constructor(private _httpClient: HttpClient) { }

  patientQueue(id: number): Observable<PatientQueue[]> {
    return this._httpClient.get<PatientQueue[]>(`https://localhost:7265/api/PatientsQueue/${id}`);
  }

  specialQueue(id: number): Observable<SpecialQueue[]> {
    return this._httpClient.get<SpecialQueue[]>(`https://localhost:7265/api/SpecialsQueue/${id}`);
  }

  remove(id: number): Observable<Queue> {
    return this._httpClient.delete<Queue>(`https://localhost:7265/api/Pharmacy/removePatient/${id}`);
  }
}
