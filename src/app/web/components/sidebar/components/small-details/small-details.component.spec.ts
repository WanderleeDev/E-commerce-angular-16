import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDetailsComponent } from './small-details.component';

describe('SmallDetailsComponent', () => {
  let component: SmallDetailsComponent;
  let fixture: ComponentFixture<SmallDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallDetailsComponent]
    });
    fixture = TestBed.createComponent(SmallDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
