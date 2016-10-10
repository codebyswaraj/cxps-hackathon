import { Component, OnInit } from '@angular/core';
import {ReleaseHistory} from './release-history.json'
import {ReleaseHistoryService} from './release-history.service'

@Component({
  //selector: 'app-release-history',
  templateUrl: './release-history.component.html',
  styleUrls: ['./release-history.component.css']
})
export class ReleaseHistoryComponent implements OnInit {

  releaseHistories: ReleaseHistory[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private releaseHistoryService : ReleaseHistoryService){ }

  ngOnInit(){
    this.releaseHistoryService
      .get()
      .subscribe(
         /* happy path */ d => this.releaseHistories = d);
  }

}
