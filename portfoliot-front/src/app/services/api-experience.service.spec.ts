import { TestBed } from '@angular/core/testing';

import { ApiExperienceService } from './api-experience.service';

describe('ApiExperienceService', () => {
  let service: ApiExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
