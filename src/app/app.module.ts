import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { DownloadResourceComponent } from './download-resource/download-resource.component';
import { ReleaseHistoryComponent } from './release-history/release-history.component';
import {DownloadResourceService} from './download-resource/download-resource.service';
import {ReleaseHistoryService} from './release-history/release-history.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataTableModule,SharedModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    DownloadResourceComponent,
    ReleaseHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    routing
  ],
  providers: [DownloadResourceService, ReleaseHistoryService],
  bootstrap: [AppComponent, DownloadResourceComponent, ReleaseHistoryComponent]
})
export class AppModule { }
