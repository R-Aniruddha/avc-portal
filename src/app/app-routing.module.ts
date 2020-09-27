import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { EditNavbarComponent } from './edit-navbar/edit-navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CreateportalComponent } from './createportal/createportal.component';
import { EditfooterComponent } from './editfooter/editfooter.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  {
    path: 'home', 
    component: MainComponent 
  },
  {
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      {
        path: 'createportal',
        component : CreateportalComponent,
        //outlet: 'subrouter'
      },
      {
        path: 'editnavbar',
        component:EditNavbarComponent,
        //outlet: 'subrouter'
      },
      {
        path: 'editfooter',
        component:EditfooterComponent,
        //outlet: 'subrouter'
      }
    ]
  },
  
  {
    path: '**', 
    component: NotfoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppComponent, DashboardComponent, EditNavbarComponent, CreateportalComponent, NotfoundComponent];