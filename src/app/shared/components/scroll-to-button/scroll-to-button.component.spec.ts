import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToButtonComponent } from './scroll-to-button.component';

describe('ScrollToButtonComponent', () => {
  let component: ScrollToButtonComponent;
  let fixture: ComponentFixture<ScrollToButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollToButtonComponent]
    });
    fixture = TestBed.createComponent(ScrollToButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
