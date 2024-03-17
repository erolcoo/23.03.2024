import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectSuvCarComponent } from './redirect-suv-car.component';

describe('RedirectSuvCarComponent', () => {
  let component: RedirectSuvCarComponent;
  let fixture: ComponentFixture<RedirectSuvCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedirectSuvCarComponent]
    });
    fixture = TestBed.createComponent(RedirectSuvCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
