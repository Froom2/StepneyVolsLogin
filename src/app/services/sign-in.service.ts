import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { User } from '../models/user';

@Injectable()
export class SignInService {

  monthBorn: string;
  dayBorn: string;
  visitReason: string;
  currentUser: User;

  constructor(private databaseService: DatabaseService) { }

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

  reasons = [
    'Volunteering',
    'Riding',
    'Just visiting'
  ]

  setMonth(month: string) {
    this.monthBorn = month;
  }

  get months(): string[] {
    return Object.keys(this.monthInfo);
  }

  setDayBorn(day: string) {
    this.dayBorn = day;
  }

  get daysInMonthBorn(): number[] {
    return Array.from(Array(this.monthInfo[this.monthBorn]).keys()).map(x => x + 1);
  }

  setReason(reason: string) {
    this.visitReason = reason;
  }

  get reason(): string {
    return this.visitReason;
  }

  selectVisitReason() {
    const userList = [];

    this.databaseService.getUser(this.monthBorn, this.dayBorn)
      .query.once('value').then(data => {
        data.forEach(element => {
          userList.push({
            $key: element.key,
            ...element.val()
          });
        });

        const newVisit = {
          dateTime: new Date(),
          eventType: 'arrival',
          purpose: this.reason
        };

        this.currentUser = userList[0];
        if (this.currentUser.visits == null) {
          this.currentUser.visits = [newVisit]
        } else {
          this.currentUser.visits.push(newVisit)
        }

        this.databaseService.updateUser(this.currentUser)
          .then(_ => console.log('update success'))
          .catch(err => console.error(err));
      });
  }

}

export enum Reasons {
  Volunteering = 'Volunteering',
  Riding = 'Riding',
  JustVisiting = 'Just visiting'
}
