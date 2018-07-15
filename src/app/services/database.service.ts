import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

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


  writeUserData(userId, firstName, lastName, dayAndMonthOfBirth, volunteerType) {
    const visit = {
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      dayAndMonthOfBirth: dayAndMonthOfBirth,
      volunteerType: volunteerType
    }
    
    this.visitsRef.push(visit);
  }

}
