import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'recapproject';
  user: string = 'Cagri Camyar';

  car1 = {
    carId: 1,
    brandId: 1,
    colourId: 1,
    carName: 'Ford',
    dailyPrice: 1650,
    modelYear: 2017,
    description: 'Ford Focus 2017 Black',
  };
  car2 = {
    carId: 2,
    brandId: 2,
    colourId: 3,
    carName: 'Mercedes',
    dailyPrice: 2000,
    modelYear: 2020,
    description: 'Mercedes A180 2020 White',
  };
  car3 = {
    carId: 3,
    brandId: 3,
    colourId: 1,
    carName: 'Audi',
    dailyPrice: 1750,
    modelYear: 2021,
    description: 'Audi A3 2021 Black',
  };
  car4 = {
    carId: 4,
    brandId: 2,
    colourId: 2,
    carName: 'Mercedes',
    dailyPrice: 2250,
    modelYear: 2022,
    description: 'Mercedes AMG 2022 Blue',
  };
  car5 = {
    carId: 5,
    brandId: 1,
    colourId: 3,
    carName: 'Ford',
    dailyPrice: 1400,
    modelYear: 2015,
    description: 'Ford Fiesta 2015 White',
  };

  cars = [this.car1, this.car2, this.car3, this.car4, this.car5];
}
