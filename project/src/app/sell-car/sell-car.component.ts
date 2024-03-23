import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetdataService } from '../getdata.service';


@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styleUrls: ['./sell-car.component.css']
})
export class SellCarComponent {

  constructor(private router: Router, private getDataService: GetdataService) { }

  onSubmit(form: any): void {
    if (form.valid) {
      const data = {
        model: form.value.carName,
        image: form.value.carImage
      };

      this.getDataService.postData(data)
        .subscribe(response => {
          console.log('POST successful:', response);
          console.log(data);

          // Добавете код за обработка на успешно изпратените данни тук
          this.router.navigate(['/your-car']);
        }, error => {
          console.error('POST error:', error);
        });
    } else {
      console.error('Формата не е валидна.');
    }
  }
}
