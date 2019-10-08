import { TestBed } from '@angular/core/testing';

import { GeneratorServiceService } from './generator-service.service';

describe('GeneratorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneratorServiceService = TestBed.get(GeneratorServiceService);
    expect(service).toBeTruthy();
  });
});
