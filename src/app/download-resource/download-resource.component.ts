import { Component, OnInit } from '@angular/core';
import {DownloadResource} from './download-resource.json'
import {DownloadResourceService} from './download-resource.service'

@Component({
  //selector: 'app-download-resource',
  templateUrl: './download-resource.component.html',
  styleUrls: ['./download-resource.component.css']
})
export class DownloadResourceComponent implements OnInit {

  downloadResources: DownloadResource[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private dwldResoService : DownloadResourceService){ }

  ngOnInit(){
    console.log("Coming -----> 1");
    this.dwldResoService
      .get()
      .subscribe(
         /* happy path */ d => this.downloadResources = d);
  }

}
