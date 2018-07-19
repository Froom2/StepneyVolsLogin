import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthenticationService } from './services/authentication.service';
import { DatabaseService } from './services/database.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthGuardService } from './services/auth-guard.service';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { MonthComponent } from './components/month/month.component';
import { DayComponent } from './components/day/day.component';
import { SignInService } from './services/sign-in.service';
import { VisitReasonComponent } from './components/visit-reason/visit-reason.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    AuthenticationComponent,
    ThankyouComponent,
    MonthComponent,
    DayComponent,
    VisitReasonComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    DatabaseService,
    AngularFireDatabase,
    SignInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
