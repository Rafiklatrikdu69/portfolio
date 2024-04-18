import { TestBed } from '@angular/core/testing';

import { ApiProjetService } from './api-projet.service';

describe('ApiProjetService', () => {
  let service: ApiProjetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProjetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
