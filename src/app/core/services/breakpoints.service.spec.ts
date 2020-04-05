import { TestBed } from '@angular/core/testing';

import { BreakpointsService } from './breakpoints.service';

describe('BreakpointsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreakpointsService = TestBed.inject(BreakpointsService);
    expect(service).toBeTruthy();
  });
});
