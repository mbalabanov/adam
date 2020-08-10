import { TestBed } from '@angular/core/testing';

import { GetnewsdataService } from './getnewsdata.service';

describe('GetnewsdataService', () => {
  let service: GetnewsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetnewsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
