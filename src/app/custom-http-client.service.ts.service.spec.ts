import { TestBed } from '@angular/core/testing';

import { CustomHttpClientServiceTsService } from './custom-http-client.service.ts.service';

describe('CustomHttpClientServiceTsService', () => {
  let service: CustomHttpClientServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomHttpClientServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
