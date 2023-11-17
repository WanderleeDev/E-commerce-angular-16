import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTotalPriceComponent } from './box-total-price.component';

describe('BoxTotalPriceComponent', () => {
  let component: BoxTotalPriceComponent;
  let fixture: ComponentFixture<BoxTotalPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxTotalPriceComponent]
    });
    fixture = TestBed.createComponent(BoxTotalPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
