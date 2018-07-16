import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { DatabaseService } from './services/database.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { WelcomeComponent } from './components/sign-in/welcome/welcome.component';
import { MonthsComponent } from './components/sign-in/months/months.component';
import { DaysComponent } from './components/sign-in/days/days.component';
import { ReasonComponent } from './components/sign-in/reason/reason.component';
import { ThankYouComponent } from './components/sign-in/thank-you/thank-you.component';
import {SignInService} from './services/sign-in.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    WelcomeComponent,
    MonthsComponent,
    DaysComponent,
    ReasonComponent,
    ThankYouComponent
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
