import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { StylingService} from './styling.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { EditNavbarComponent } from './edit-navbar/edit-navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CreateportalComponent } from './createportal/createportal.component';
import { EditfooterComponent } from './editfooter/editfooter.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { ApiService } from './api.service';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    CardComponent,
    FooterComponent,
    routingComponents,
    EditNavbarComponent,
    EditfooterComponent,
    CreateportalComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule, 
    MatSelectModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StylingService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
