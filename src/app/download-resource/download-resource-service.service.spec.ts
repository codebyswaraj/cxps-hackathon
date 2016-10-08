/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DownloadResourceServiceService } from './download-resource-service.service';

describe('Service: DownloadResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DownloadResourceServiceService]
    });
  });

  it('should ...', inject([DownloadResourceServiceService], (service: DownloadResourceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
