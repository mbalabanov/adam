import { TestBed } from '@angular/core/testing';

import { ApirequestsService } from './apirequests.service';

describe('ApirequestsService', () => {
  let service: ApirequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApirequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
