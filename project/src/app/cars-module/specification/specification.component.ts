import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../getdata.service';
import { Specification } from '../../types/specification';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css'],
})
export class SpecificationComponent implements OnInit {
  specification: Specification[] = [];
  constructor(private getDataService: GetdataService) {}

  // Usage in your component
  ngOnInit() {
    this.getDataService.fetchDataSpecification().subscribe(
      specification => {
        this.specification = specification;
        console.log('Fetched specification:', this.specification);
      },
      (error) => console.error('Error fetching data:', error)
    );
  }
}
