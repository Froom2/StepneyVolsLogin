import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {
  userThing: User[];

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

    // this.dataService.writeUserData(
    //   "testid",
    //     "testFirstName",
    //     "testLastName",
    //     this.monthBorn + this.dayBorn,
    //     "volunteerType"
    // )

    console.log("got this far with.... " + this.monthBorn + this.dayBorn)
    this.dataService.getUsersWithMonth(this.monthBorn, this.dayBorn)
      .on("value",
        snapshot => {
          console.log(snapshot.val());
          this.userThing = snapshot.val();
          this.userThing.forEach(x => console.log(x.firstName));
        },
        errorObject =>  console.log("The read failed: " + errorObject.code)
      );

    setTimeout( function(t) {
      t.currentFormElement = FormElements.Welcome;
    }, 2000, this);
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
