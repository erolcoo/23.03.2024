import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { Car } from '../types/cars';

@Component({
  selector: 'app-hybrid-cars',
  templateUrl: './hybrid-cars.component.html',
  styleUrls: ['./hybrid-cars.component.css']
})
export class HybridCarsComponent implements OnInit {
  cars: Car[] = [];
  loaderState: string = 'visible'; // Set initial state to 'visible'

  constructor(private getDataService: GetdataService) { }

  ngOnInit() {
    this.getDataService.fetchDataHybrid().subscribe(
      cars => {
        this.cars = cars;
        this.loaderState = 'hidden'; // Hide the loader when data is fetched
        console.log('Fetched cars:', this.cars);
      },
      error => {
        console.error('Error fetching data:', error);
        this.loaderState = 'hidden'; // Hide the loader if there's an error
      }
    );
  }
}
