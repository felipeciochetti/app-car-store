import { Car } from './../model/Car';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    // tslint:disable-next-line: no-unused-expression
    const list_car = [
      { id: 11,  brand: 'Ford',model: 'Fusion',year: '2010' , price: 10000 },
      { id: 12,  brand: 'Tesla',model: 'Tesla 01',year: '2011' , price: 10000 },
      { id: 13,  brand: 'Lincol',model: 'Lincol',year: '2012' , price: 10000 },
      { id: 14,  brand: 'Toyota',model: 'Prius',year: '2013' , price: 10000 },
      { id: 15,  brand: 'Ford',model: 'Focus',year: '2014' , price: 10000 },
      { id: 16,  brand: 'Toyota',model: 'Yaris',year: '2015' , price: 10000 },
      { id: 17,  brand: 'Tesla',model: 'Tesla 02',year: '2016' , price: 10000 },
      { id: 18,  brand: 'Nissan',model: 'Nissan',year: '2020' , price: 10000 },
      { id: 19,  brand: 'Volks',model: 'New Beatlle',year: '2021' , price: 10000 },
      { id: 20,  brand: 'Ford',model: 'Rio',year: '2020' , price: 10000 },
    ];
    return {list_car};
  }

  genId(car: Car[]): number {
    return car.length > 0 ? Math.max(...car.map(car => car.id)) + 1 : 11;
  }

}
