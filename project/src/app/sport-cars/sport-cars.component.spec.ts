import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportCarsComponent } from './sport-cars.component';

describe('SportCarsComponent', () => {
  let component: SportCarsComponent;
  let fixture: ComponentFixture<SportCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportCarsComponent]
    });
    fixture = TestBed.createComponent(SportCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
