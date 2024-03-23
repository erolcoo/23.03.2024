import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCarComponent } from './your-car.component';

describe('YourCarComponent', () => {
  let component: YourCarComponent;
  let fixture: ComponentFixture<YourCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourCarComponent]
    });
    fixture = TestBed.createComponent(YourCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
