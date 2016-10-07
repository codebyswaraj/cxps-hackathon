import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { DownloadResourceComponent } from './download-resource/download-resource.component';
import { ReleaseHistoryComponent } from './release-history/release-history.component';

const appRoutes:Routes = [{
    path : 'rel-history',
    component : ReleaseHistoryComponent
},{
    path : 'dwld-resource',
    component : DownloadResourceComponent
}]

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);