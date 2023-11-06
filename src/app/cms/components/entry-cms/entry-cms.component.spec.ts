import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCmsComponent } from './entry-cms.component';

describe('EntryCmsComponent', () => {
  let component: EntryCmsComponent;
  let fixture: ComponentFixture<EntryCmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntryCmsComponent]
    });
    fixture = TestBed.createComponent(EntryCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
