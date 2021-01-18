import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainPagesComponent } from './main-pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: MainPagesComponent,
        children: [
          // rutas protegidas con autenticacion
          { path: '', component: DashboardComponent},  
          { path: 'progress', component: ProgressComponent}, 
        ]
      }, 
 ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
