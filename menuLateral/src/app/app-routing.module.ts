 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { MainPagesComponent } from './pages/main-pages.component';
 
 
const routers: Routes = [

      // rutas publicas
    { path: 'login', component: LoginComponent},  
    { path: 'register', component: RegisterComponent},

    { 
      path: '', 
      component: MainPagesComponent,
      children: [
        // rutas protegidas con autenticacion
        { path: 'dashboard', component: DashboardComponent},  
        { path: 'progress', component: ProgressComponent}, 
        { path: '', pathMatch:'full', redirectTo:'/dashboard' },
      ]
    },  

 
    { path: '**', component: NoPageFoundComponent  },
  ];

@NgModule({
  declarations: [],  
  imports: [
    RouterModule.forRoot(routers,{useHash:true})
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
