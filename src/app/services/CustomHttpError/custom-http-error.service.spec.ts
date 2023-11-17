import { TestBed } from '@angular/core/testing';

import { CustomHttpErrorService } from './custom-http-error.service';

describe('CustomHttpErrorService', () => {
  let service: CustomHttpErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomHttpErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
