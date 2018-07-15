import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe( user => {
      this.user = user;
    })
  }

  get authenticated(): boolean {
    return this.user !== undefined
  }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}
