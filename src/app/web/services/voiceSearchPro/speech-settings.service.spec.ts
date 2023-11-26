import { TestBed } from '@angular/core/testing';

import { SpeechSettingsService } from './speech-settings.service';

describe('SpeechSettingsService', () => {
  let service: SpeechSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
