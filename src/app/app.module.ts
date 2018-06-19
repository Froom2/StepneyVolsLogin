import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormElements, WelcomeScreenComponent} from './components/welcome-screen/welcome-screen.component';
import {AppRoutingModule} from './app-routing.module';
import { AuthenticationComponent } from './components/authentication/authentication.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
