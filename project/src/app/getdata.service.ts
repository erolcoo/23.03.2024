import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car} from "./types/cars";
import { Specification } from './types/specification';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<Car[]> {
    const url = 'https://angular-7fca5-default-rtdb.europe-west1.firebasedatabase.app/-NsbzMWfSvk9e4ginAJE/Sportcars.json';
    return this.http.get<Car[]>(url);
  }

  fetchDataSuv(): Observable<Car[]> {
    const url = 'https://angular-7fca5-default-rtdb.europe-west1.firebasedatabase.app/-NsbzMWfSvk9e4ginAJE/Suvcars.json';
    return this.http.get<Car[]>(url);
  }

  fetchDataHybrid(): Observable<Car[]> {
    const url = 'https://angular-7fca5-default-rtdb.europe-west1.firebasedatabase.app/-NsbzMWfSvk9e4ginAJE/Hybridcars.json';
    return this.http.get<Car[]>(url);
  }


  fetchDataSpecification(): Observable<Specification[]> {
    const url = 'https://angular-7fca5-default-rtdb.europe-west1.firebasedatabase.app/-NtBt2l8a1jHfV5xWnXB/Specification.json';
    return this.http.get<Specification[]>(url);
  }


}

