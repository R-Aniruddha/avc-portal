/*

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EditNavbarComponent } from '../edit-navbar/edit-navbar.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { CreateportalComponent } from '../createportal/createportal.component';
import { EditfooterComponent } from '../editfooter/editfooter.component';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard/createportal',
        component : CreateportalComponent,
        outlet: 'subrouter'
      },
      {
        path: 'dashboard/editnavbar',
        component:EditNavbarComponent,
        outlet: 'subrouter'
      },
      {
        path: 'dashboard/editfooter',
        component:EditfooterComponent,
        outlet: 'subrouter'

      }
    ]
  },
  
  {
    path: '**', 
    component: NotfoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(dashboardRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppComponent, DashboardComponent, EditNavbarComponent, CreateportalComponent, NotfoundComponent];

*/