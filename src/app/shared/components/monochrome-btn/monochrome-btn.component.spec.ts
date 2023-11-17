import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonochromeBtnComponent } from './monochrome-btn.component';

describe('MonochromeBtnComponent', () => {
  let component: MonochromeBtnComponent;
  let fixture: ComponentFixture<MonochromeBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonochromeBtnComponent]
    });
    fixture = TestBed.createComponent(MonochromeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
