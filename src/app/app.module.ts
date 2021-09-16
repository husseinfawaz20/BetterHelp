
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';


/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutUSComponent } from './components/about-us/about-us.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
 import { DelegatehomeComponent } from './components/delegatehome/delegatehome.component';
import { IndependenthomeComponent } from './components/independenthome/independenthome.component';
import { DonateComponent } from './components/donate/donate.component';
import { DonatefoodComponent } from './components/donatefood/donatefood.component';
import { MissionComponent } from './components/mission/mission.component';
 import {AppService} from './services/app.service';
import { ViewadminsComponent } from './components/viewadmins/viewadmins.component';
import { RegisterdelegatorComponent } from './components/registerdelegator/registerdelegator.component';
import { RegisterfamiliesComponent } from './components/registerfamilies/registerfamilies.component';
import { RegisterindependentComponent } from './components/registerindependent/registerindependent.component';
import { ViewfamiliesComponent } from './components/viewfamilies/viewfamilies.component';
import { ViewdelegatorsComponent } from './components/viewdelegators/viewdelegators.component';
import { ViewindependentsComponent } from './components/viewindependents/viewindependents.component';
import { ViewadminmissionComponent } from './components/viewadminmission/viewadminmission.component';
import { DonateindependentComponent } from './components/donateindependent/donateindependent.component';
import { AssignfamilyComponent } from './components/assignfamily/assignfamily.component';
import { ViewfamilyreportComponent } from './components/viewfamilyreport/viewfamilyreport.component'


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    RegisterComponent,
    LogInComponent,
    AboutUSComponent,
    AdminhomeComponent,
     DelegatehomeComponent,
    IndependenthomeComponent,
    DonateComponent,
    DonatefoodComponent,
    MissionComponent,
    ViewadminsComponent,
    RegisterdelegatorComponent,
    RegisterfamiliesComponent,
    RegisterindependentComponent,
    ViewfamiliesComponent,
    ViewdelegatorsComponent,
    ViewindependentsComponent,
    ViewadminmissionComponent,
    DonateindependentComponent,
    DonateindependentComponent,
    AssignfamilyComponent,
    ViewfamilyreportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule

  ],
  providers: [
    AppService
    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
