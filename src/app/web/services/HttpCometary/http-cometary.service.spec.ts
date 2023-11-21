import { TestBed } from '@angular/core/testing';

import { HttpCometaryService } from './http-cometary.service';

describe('HttpComentaryService', () => {
  let service: HttpCometaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCometaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
