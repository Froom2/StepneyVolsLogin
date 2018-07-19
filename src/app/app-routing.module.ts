import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ThankyouComponent } from './components/thankyou/thankyou.component';

const appRoutes: Routes = [
  { path: '', component: AuthenticationComponent},
  { path: 'thankyou', component: ThankyouComponent, canActivate: [AuthGuardService]},
  { path: 'welcome', component: WelcomeScreenComponent, canActivate: [AuthGuardService]}
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
