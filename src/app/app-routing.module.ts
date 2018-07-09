import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: AuthenticationComponent},
  { path: 'login', component: WelcomeScreenComponent, canActivate: [AuthGuardService]}
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
