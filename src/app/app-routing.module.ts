import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { MonthComponent } from './components/month/month.component';
import { DayComponent } from './components/day/day.component';
import { VisitReasonComponent } from './components/visit-reason/visit-reason.component';

const appRoutes: Routes = [
  { path: '', component: AuthenticationComponent},
  { path: 'welcome', component: WelcomeScreenComponent, canActivate: [AuthGuardService]},
  { path: 'month', component: MonthComponent, canActivate: [AuthGuardService]},
  { path: 'day', component: DayComponent, canActivate: [AuthGuardService]},
  { path: 'visit-reason', component: VisitReasonComponent, canActivate: [AuthGuardService]},
  { path: 'thankyou', component: ThankyouComponent, canActivate: [AuthGuardService]}
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
