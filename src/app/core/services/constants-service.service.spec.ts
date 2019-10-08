import { TestBed } from '@angular/core/testing';

import { ConstantsServiceService } from './constants-service.service';

describe('ConstantsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstantsServiceService = TestBed.get(ConstantsServiceService);
    expect(service).toBeTruthy();
  });
});
