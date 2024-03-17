import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectSportsCarComponent } from './redirect-sports-car.component';

describe('RedirectSportsCarComponent', () => {
  let component: RedirectSportsCarComponent;
  let fixture: ComponentFixture<RedirectSportsCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedirectSportsCarComponent]
    });
    fixture = TestBed.createComponent(RedirectSportsCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
