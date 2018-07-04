import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class DatabaseService {

  constructor() { }

  writeUserData(userId, firstName, lastName, dateOfBirth, volunteerType, dateTime, event, purpose) {
    firebase.database().ref('visits').push({
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      volunteerType: volunteerType,
      dateTime: dateTime,
      event: event,
      purpose: purpose
    });
  }

}
