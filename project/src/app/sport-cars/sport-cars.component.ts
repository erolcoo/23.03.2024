import { Component ,OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { Car} from '../types/cars';


@Component({
  selector: 'app-sport-cars',
  templateUrl: './sport-cars.component.html',
  styleUrls: ['./sport-cars.component.css']
})
export class SportCarsComponent implements OnInit  {

  cars: Car[] = []; // Използвайте интерфейса Car за типа на масива

  constructor(private getDataService: GetdataService) { }

  // Usage in your component
  ngOnInit() {
    this.getDataService.fetchData().subscribe(
      cars => {
        this.cars = cars;
        console.log('Fetched cars:', this.cars); // Проверка в конзолата за успешното извличане на данните
      },
      error => console.error('Error fetching data:', error)
    );
  }

}
