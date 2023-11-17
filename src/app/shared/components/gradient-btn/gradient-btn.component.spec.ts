import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientBtnComponent } from './gradient-btn.component';

describe('GradientBtnComponent', () => {
  let component: GradientBtnComponent;
  let fixture: ComponentFixture<GradientBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradientBtnComponent]
    });
    fixture = TestBed.createComponent(GradientBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
