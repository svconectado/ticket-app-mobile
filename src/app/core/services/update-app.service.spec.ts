import { TestBed } from '@angular/core/testing';

import { UpdateAppService } from './update-app.service';

describe('UpdateAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateAppService = TestBed.get(UpdateAppService);
    expect(service).toBeTruthy();
  });
});
