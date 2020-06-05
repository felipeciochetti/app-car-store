import { CarService } from './../../service/car.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { constructor } from 'q';
import { Router } from '@angular/router';
import { Car } from '@app/model/Car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
    styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
    listCar: Observable<Car[]> | undefined;

  // tslint:disable-next-line: prettier
  constructor(private carService: CarService, private router: Router) {


  }

  ngOnInit() {
    this.reloadListCars();
  }


  reloadListCars() {
    this.listCar = this.carService.getCarList();
  }




}
