import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectHybridCarComponent } from './redirect-hybrid-car.component';

describe('RedirectHybridCarComponent', () => {
  let component: RedirectHybridCarComponent;
  let fixture: ComponentFixture<RedirectHybridCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedirectHybridCarComponent]
    });
    fixture = TestBed.createComponent(RedirectHybridCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
