import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetdataService } from '../getdata.service';
import { Car } from '../types/cars';

@Component({
  selector: 'app-your-car',
  templateUrl: './your-car.component.html',
  styleUrls: ['./your-car.component.css']
})
export class YourCarComponent implements OnInit {
  cars: Car[] = [];

  constructor(private router: Router, private getDataService: GetdataService) { }

  ngOnInit(): void {
    this.getDataService.getData()
      .subscribe((data: any) => {
        const carIds = Object.keys(data);
        this.cars = carIds.map(id => data[id]);
        console.log(this.cars);
      });
  }

  deleteCar(itemId: string): void {
    this.getDataService.deleteData(itemId)
      .subscribe(response => {
        console.log('DELETE successful:', response);
        this.router.navigate(['/home']);
      }, error => {
        console.error('DELETE error:', error);
      });
  }
}
