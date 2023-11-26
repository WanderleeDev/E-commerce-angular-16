import { TestBed } from '@angular/core/testing';

import { VoiceSearchProService } from './voice-search-pro.service';

describe('VoiceSearchProService', () => {
  let service: VoiceSearchProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiceSearchProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
