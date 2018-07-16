import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthGuardService } from './auth-guard.service';
import {WelcomeComponent} from './components/sign-in/welcome/welcome.component';
import {DaysComponent} from './components/sign-in/days/days.component';
import {MonthsComponent} from './components/sign-in/months/months.component';
import {ReasonComponent} from './components/sign-in/reason/reason.component';
import {ThankYouComponent} from './components/sign-in/thank-you/thank-you.component';

const appRoutes: Routes = [
  { path: '', component: AuthenticationComponent},
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuardService] },
  { path: 'days', component: DaysComponent, canActivate: [AuthGuardService]},
  { path: 'months', component: MonthsComponent, canActivate: [AuthGuardService]},
  { path: 'reason', component: ReasonComponent, canActivate: [AuthGuardService]},
  { path: 'thank-you', component: ThankYouComponent, canActivate: [AuthGuardService]},
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
