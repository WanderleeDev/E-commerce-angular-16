import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlantedTagComponent } from './slanted-tag.component';

describe('SlantedTagComponent', () => {
  let component: SlantedTagComponent;
  let fixture: ComponentFixture<SlantedTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlantedTagComponent]
    });
    fixture = TestBed.createComponent(SlantedTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
