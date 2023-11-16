import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrophoneIconComponent } from './microphone-icon.component';

describe('MicrophoneIconComponent', () => {
  let component: MicrophoneIconComponent;
  let fixture: ComponentFixture<MicrophoneIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicrophoneIconComponent]
    });
    fixture = TestBed.createComponent(MicrophoneIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
