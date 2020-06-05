import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '@app/model/Car';

import { CarService } from './../../service/car.service';

@Component({
    selector: 'app-car-create',
    templateUrl: './car-create.component.html',
    styleUrls: ['./car-create.component.css'],
})
export class CarCreateComponent implements OnInit {
    createCar: Car = new Car();
    submitted = false;

    constructor(private carService: CarService, private router: Router) {}

    ngOnInit() {}

    newCar(): void {
        this.submitted = false;
        this.createCar = new Car();
    }

    save() {
        this.carService.createCar(this.createCar).subscribe(
            data => console.log(data),
            error => console.log(error)
        );
        this.createCar = new Car();
        this.gotoList();
    }

    onSubmit() {
        this.submitted = true;
        this.save();
    }

    gotoList() {
        this.router.navigate(['/car-list']);
    }
}
