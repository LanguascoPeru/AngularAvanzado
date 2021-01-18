 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//---- modulo hijas
import { PagesRoutingModule } from './pages/pages.routing.module';
//---- modulo rutas publicas ---
import { AuthRoutingModule } from './auth/auth.routing.module';
 
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
 
const routers: Routes = [
      // rutas publicas
    // { path: 'login', component: LoginComponent},  
    // { path: 'register', component: RegisterComponent},
    //---- forma normal acumulada ----
    // { 
    //   path: '', 
    //   component: MainPagesComponent,
    //   children: [
    //     // rutas protegidas con autenticacion
    //     { path: 'dashboard', component: DashboardComponent},  
    //     { path: 'progress', component: ProgressComponent}, 
    //     { path: '', pathMatch:'full', redirectTo:'/dashboard' },
    //   ]
    // },   
    { path: '', pathMatch:'full', redirectTo:'/dashboard' },
    { path: '**', component: NoPageFoundComponent  },

  ];

@NgModule({
  declarations: [],  
  imports: [
    RouterModule.forRoot(routers,{useHash:true}),
    // ---- rutas hijas extraidas en un modulo
    PagesRoutingModule,
     // ---- rutas publicas
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
