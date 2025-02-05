import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

apiUrl = "https://localhost:44381/api/cars/getall";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl)
  }




}
