import { TestBed } from '@angular/core/testing';

import { ParamsInterceptorInterceptor } from './params-interceptor.interceptor';

describe('ParamsInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ParamsInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ParamsInterceptorInterceptor = TestBed.inject(ParamsInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
