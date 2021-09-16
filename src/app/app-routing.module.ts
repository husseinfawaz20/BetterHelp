import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutUSComponent } from './components/about-us/about-us.component';
import { AdminhomeComponent} from './components/adminhome/adminhome.component';
 import { DelegatehomeComponent } from './components/delegatehome/delegatehome.component';
import { IndependenthomeComponent } from './components/independenthome/independenthome.component';
import { DonateComponent } from './components/donate/donate.component';
import { DonatefoodComponent } from './components/donatefood/donatefood.component';
import { MissionComponent } from './components/mission/mission.component';
 import { ViewadminsComponent } from './components/viewadmins/viewadmins.component';
import { RegisterdelegatorComponent } from './components/registerdelegator/registerdelegator.component';
import { RegisterfamiliesComponent } from './components/registerfamilies/registerfamilies.component';
import { RegisterindependentComponent } from './components/registerindependent/registerindependent.component';
import { ViewfamiliesComponent } from './components/viewfamilies/viewfamilies.component';
import { ViewindependentsComponent } from './components/viewindependents/viewindependents.component';
import { ViewdelegatorsComponent } from './components/viewdelegators/viewdelegators.component';
import { ViewadminmissionComponent } from './components/viewadminmission/viewadminmission.component';
import { DonateindependentComponent } from './components/donateindependent/donateindependent.component';
import { AssignfamilyComponent } from './components/assignfamily/assignfamily.component';
import { ViewfamilyreportComponent } from './components/viewfamilyreport/viewfamilyreport.component';


const routes: Routes = [
  { path: '', component:LogInComponent, pathMatch: 'prefix' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  {path:'aboutus', component: AboutUSComponent},
  {path:'adminhome', component: AdminhomeComponent},
   {path:'delegatehome', component: DelegatehomeComponent},
  {path:'independenthome', component: IndependenthomeComponent},
  {path:'donate', component: DonateComponent},
  {path:'donatefood', component: DonatefoodComponent},
  {path:'viewmission', component: MissionComponent},
   {path:'viewadmins', component: ViewadminsComponent},
  {path: 'registerdelegator', component: RegisterdelegatorComponent},
  {path: 'registerfamilies', component: RegisterfamiliesComponent},
  { path: 'registerindependent', component: RegisterindependentComponent},
  { path: 'viewfamilies', component: ViewfamiliesComponent},
  { path: 'viewindependents', component: ViewindependentsComponent},
  { path: 'viewdelegators', component: ViewdelegatorsComponent},
  { path: 'viewadminmission', component: ViewadminmissionComponent},
  { path: 'donateindependent' , component: DonateindependentComponent},
  {path:'assignfamily', component: AssignfamilyComponent},
  {path:'viewfamilyreport' , component: ViewfamilyreportComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
