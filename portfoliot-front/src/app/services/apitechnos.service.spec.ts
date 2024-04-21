import { TestBed } from '@angular/core/testing';

import { ApitechnosService } from './apitechnos.service';

describe('ApitechnosService', () => {
  let service: ApitechnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApitechnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
