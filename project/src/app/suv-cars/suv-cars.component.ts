import { Component ,OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { Car} from '../types/cars';

@Component({
  selector: 'app-suv-cars',
  templateUrl: './suv-cars.component.html',
  styleUrls: ['./suv-cars.component.css']
})
export class SuvCarsComponent implements OnInit  {
  cars: Car[] = [];
  constructor(private getDataService: GetdataService) { }

  // Usage in your component
  ngOnInit() {
    this.getDataService.fetchDataSuv().subscribe(
      cars => {
        this.cars = cars;
        console.log('Fetched cars:', this.cars); // Проверка в конзолата за успешното извличане на данните
      },
      error => console.error('Error fetching data:', error)
    );
  }

}
