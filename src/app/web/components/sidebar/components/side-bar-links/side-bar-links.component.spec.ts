import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarLinksComponent } from './side-bar-links.component';

describe('SideBarLinksComponent', () => {
  let component: SideBarLinksComponent;
  let fixture: ComponentFixture<SideBarLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarLinksComponent]
    });
    fixture = TestBed.createComponent(SideBarLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
