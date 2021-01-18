import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule}  from  '@angular/router';

import { MainPagesComponent } from './main-pages.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
 



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    MainPagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports : [
    DashboardComponent,
    ProgressComponent,
    MainPagesComponent
  ]
})
export class PagesModule { }
