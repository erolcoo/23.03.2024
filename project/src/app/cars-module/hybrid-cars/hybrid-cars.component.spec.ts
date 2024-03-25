import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridCarsComponent } from './hybrid-cars.component';

describe('HybridCarsComponent', () => {
  let component: HybridCarsComponent;
  let fixture: ComponentFixture<HybridCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HybridCarsComponent]
    });
    fixture = TestBed.createComponent(HybridCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
