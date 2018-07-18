import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { User, Visit } from '../../models/user';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {
  userList: User[];
  currentUser: User;

  constructor(private dataService: DatabaseService) {

  }

  FormElements = FormElements;
  currentFormElement = FormElements.Welcome;

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
  ]

  months = Object.keys(this.monthInfo);
  monthBorn = '';
  dayBorn = 0;
  visitReason = '';

  showMonths() {
    this.currentFormElement = FormElements.Months;
  }

  selectMonth(receiver) {
    this.currentFormElement = FormElements.Days;
    this.monthBorn = receiver.target.innerText;
  }

  daysInMonth(days) {
    return Array.from(Array(days).keys()).map(x => x + 1);
  }

  selectDay(receiver) {
    this.currentFormElement = FormElements.VisitReason;
    this.dayBorn = receiver.target.innerText;
  }

  selectVisitReason(receiver) {
    this.currentFormElement = FormElements.Thanks;
    this.visitReason = receiver.target.innerText;

    this.dataService.getUser(this.monthBorn, this.dayBorn)
      .query.once('value').then(data => {
        this.userList = [];
        data.forEach(element => {
          console.log(element);
          this.userList.push({
            $key: element.key,
            ...element.val()
          });
        });

        const newVisit = {
          dateTime: new Date(),
          eventType: 'arrival',
          purpose: this.visitReason
        };

        this.currentUser = this.userList[0];
        if (this.currentUser.visits == null) {
          this.currentUser.visits = [newVisit]
        } else {
          this.currentUser.visits.push(newVisit)
        }

        this.addVisit(this.currentUser);
      });

    setTimeout( function(t) {
      t.currentFormElement = FormElements.Welcome;
    }, 2000, this);
  }

  addVisit(user: User) {
    this.dataService.updateUser(user)
      .then(_ => console.log('update success'))
      .catch(err => console.error(err));
  }

  ngOnInit() {
  }

}

export enum FormElements {
  Months,
  Days,
  VisitReason,
  Thanks,
  Welcome
}
