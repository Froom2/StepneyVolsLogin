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
import { AuthGuardService } from './auth-guard.service';
import { DatabaseService } from './services/database.service';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    AuthenticationComponent
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
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
