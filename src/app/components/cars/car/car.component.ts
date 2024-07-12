import { Component } from '@angular/core';
import { Car } from '../../../models/car';
import { CarService } from '../../services/car.service';
import { response } from 'express';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  cars: Car[] = [];
  dataLoaded = false;

  constructor(private carService:CarService) {

    
  }




getProducts(){
  this.carService.getProducts().subscribe(response=>{
    this.cars = response.data
    this.dataLoaded= true
  })
}


}
