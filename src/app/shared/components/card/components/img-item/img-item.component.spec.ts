import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgItemComponent } from './img-item.component';

describe('ImgItemComponent', () => {
  let component: ImgItemComponent;
  let fixture: ComponentFixture<ImgItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgItemComponent]
    });
    fixture = TestBed.createComponent(ImgItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
