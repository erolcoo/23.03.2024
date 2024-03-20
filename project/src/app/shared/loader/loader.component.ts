import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [
    trigger('loader', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('visible <=> hidden', animate('400ms ease-in-out'))
    ])
  ]
})
export class LoaderComponent implements OnInit {
  loaderState = 'hidden';

  constructor() { }

  ngOnInit(): void {
    // Simulate loading process
    this.loaderState = 'visible';
    setTimeout(() => {
      this.loaderState = 'hidden';
    }, 7000); // Change this time to simulate your actual loading time
  }
}
