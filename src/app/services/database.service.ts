import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Visit, User } from '../models/user';

@Injectable()
export class DatabaseService {
  usersRef: AngularFireList<any>;
  visitsRef: AngularFireList<any>;

  constructor(public afDB: AngularFireDatabase) { 
    this.usersRef = afDB.list('users');
    this.visitsRef = afDB.list('visits');
  }

  getUsersWithMonth(month, day) {
    console.log("getUsersWithMonth " + month + day)
    return this.usersRef.query
      .orderByChild('dayAndMonthOfBirth')
      .equalTo(month + day)
  }

  updateUser(user: User, id) {
    return this.afDB.object('/users/' + id)
      .update(user);
  } 


  writeUserData(eventType, purpose) {
    const visit: Visit = {
      dateTime: new Date(),
      eventType: eventType,
      purpose: purpose
    }
    
    this.visitsRef.push(visit);
  }

}
