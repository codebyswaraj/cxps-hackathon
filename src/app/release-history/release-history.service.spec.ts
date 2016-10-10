/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReleaseHistoryService } from './release-history.service';

describe('Service: ReleaseHistory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReleaseHistoryService]
    });
  });

  it('should ...', inject([ReleaseHistoryService], (service: ReleaseHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
