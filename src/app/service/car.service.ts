import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/Car';

@Injectable({
    providedIn: 'root',
})
export class CarService {
    carUrl = 'api/list_car'; // URL to web api

    list_car: Observable<Car[]> | undefined;

    constructor(private http: HttpClient) {}

    createCar(createCar: Object): Observable<Object> {
        return this.http.post(this.carUrl, createCar);
    }

    getCarList(): Observable<Car[]> {
        return this.http.get<Car[]>(this.carUrl);
    }
}
