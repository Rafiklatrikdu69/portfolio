import { TestBed } from '@angular/core/testing';

import { ApiSemestreService } from './api-semestre.service';

describe('ApiSemestreService', () => {
  let service: ApiSemestreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSemestreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
