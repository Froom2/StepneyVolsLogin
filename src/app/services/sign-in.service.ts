import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {DatabaseService} from './database.service';

@Injectable()
export class SignInService {
  currentUser: User;
  userMonth: string;
  userDay: number;
  visitReason: string;

  constructor(private databaseService: DatabaseService) {
  }

  monthInfo = {
    'January': 31,
    'February': 29,
    'March': 31,
    'April': 30,
    'May': 31,
    'June': 30,
    'July': 31,
    'August': 31,
    'September': 30,
    'October': 31,
    'November': 30,
    'December': 31
  };

  visitInfo = [
    'Volunteering',
    'Riding',
    'Just visiting'
  ];

  get months(): string[] {
    return Object.keys(this.monthInfo);
  }

  get days(): number[] {
    return Array.from(Array(this.monthInfo[this.userMonth]).keys()).map(x => x + 1);
  }

  get visitReasons(): string[] {
    return this.visitInfo;
  }

  setMonth(month: string) {
    this.userMonth = month;
  }

  setDays(day: number) {
    this.userDay = day;
  }

  setVisitReason(reason: string) {
    this.visitReason = reason;
  }

  addVisit() {
    const userList = [];

    this.databaseService.getUser(this.userMonth, this.userDay)
      .snapshotChanges()
      .subscribe(data => {
        data.forEach(element => {
          userList.push({
            $key: element.key,
            ...element.payload.val()
          });
        });


        const newVisit = {
          dateTime: new Date(),
          eventType: 'super event',
          purpose: this.visitReason
        };

        this.currentUser = userList[0];
        this.currentUser.visits.push(newVisit);

        this.databaseService.updateUser(this.currentUser)
          .then(_ => console.log('update success'))
          .catch(err => console.error(err));
      });
  }
}
