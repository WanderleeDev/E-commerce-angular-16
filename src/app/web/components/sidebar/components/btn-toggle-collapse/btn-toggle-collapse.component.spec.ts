import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnToggleCollapseComponent } from './btn-toggle-collapse.component';

describe('BtnToggleCollapseComponent', () => {
  let component: BtnToggleCollapseComponent;
  let fixture: ComponentFixture<BtnToggleCollapseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnToggleCollapseComponent]
    });
    fixture = TestBed.createComponent(BtnToggleCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
