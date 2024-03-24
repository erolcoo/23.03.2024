import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWindowConfirmComponent } from './delete-window-confirm.component';

describe('DeleteWindowConfirmComponent', () => {
  let component: DeleteWindowConfirmComponent;
  let fixture: ComponentFixture<DeleteWindowConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteWindowConfirmComponent]
    });
    fixture = TestBed.createComponent(DeleteWindowConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
