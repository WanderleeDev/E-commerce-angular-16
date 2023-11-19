import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedFieldComponent } from './validated-field.component';

describe('ValidatedFieldComponent', () => {
  let component: ValidatedFieldComponent;
  let fixture: ComponentFixture<ValidatedFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidatedFieldComponent]
    });
    fixture = TestBed.createComponent(ValidatedFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
