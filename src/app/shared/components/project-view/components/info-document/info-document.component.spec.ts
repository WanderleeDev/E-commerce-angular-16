import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDocumentComponent } from './info-document.component';

describe('InfoDocumentComponent', () => {
  let component: InfoDocumentComponent;
  let fixture: ComponentFixture<InfoDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoDocumentComponent]
    });
    fixture = TestBed.createComponent(InfoDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
