import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe( user => {
      this.user = user;
      console.log(this.user);
    })
  }

  get authenticated(): boolean {
    return this.user !== null
  }

}
