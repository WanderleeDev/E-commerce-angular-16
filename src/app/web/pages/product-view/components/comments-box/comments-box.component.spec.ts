import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsBoxComponent } from './comments-box.component';

describe('CommentsBoxComponent', () => {
  let component: CommentsBoxComponent;
  let fixture: ComponentFixture<CommentsBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsBoxComponent]
    });
    fixture = TestBed.createComponent(CommentsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
