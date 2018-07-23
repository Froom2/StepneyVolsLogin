import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { MonthComponent } from './components/arrive/month/month.component';
import { DayComponent } from './components/arrive/day/day.component';
import { VisitReasonComponent } from './components/arrive/visit-reason/visit-reason.component';
import { MonthLeaveComponent } from './components/leave/month-leave/month-leave.component';
import { DayLeaveComponent } from './components/leave/day-leave/day-leave.component';

const appRoutes: Routes = [
  { path: '', component: AuthenticationComponent},
  { path: 'welcome', component: WelcomeScreenComponent, canActivate: [AuthGuardService]},
  { path: 'month', component: MonthComponent, canActivate: [AuthGuardService]},
  { path: 'day', component: DayComponent, canActivate: [AuthGuardService]},
  { path: 'visit-reason', component: VisitReasonComponent, canActivate: [AuthGuardService]},
  { path: 'thankyou', component: ThankyouComponent, canActivate: [AuthGuardService]},
  { path: 'month-leave', component: MonthLeaveComponent, canActivate: [AuthGuardService]},
  { path: 'day-leave', component: DayLeaveComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
