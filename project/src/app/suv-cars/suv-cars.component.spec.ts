import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuvCarsComponent } from './suv-cars.component';

describe('SuvCarsComponent', () => {
  let component: SuvCarsComponent;
  let fixture: ComponentFixture<SuvCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuvCarsComponent]
    });
    fixture = TestBed.createComponent(SuvCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
