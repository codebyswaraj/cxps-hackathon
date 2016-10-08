/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DownloadResourceService } from './download-resource.service';

describe('Service: DownloadResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DownloadResourceService]
    });
  });

  it('should ...', inject([DownloadResourceService], (service: DownloadResourceService) => {
    expect(service).toBeTruthy();
  }));
});
