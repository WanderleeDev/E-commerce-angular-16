import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnShopComponent } from './btn-shop.component';

describe('BtnShopComponent', () => {
  let component: BtnShopComponent;
  let fixture: ComponentFixture<BtnShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnShopComponent]
    });
    fixture = TestBed.createComponent(BtnShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
