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
      .snapshotChanges()
      .subscribe(data => {
        this.userList = [];
        data.forEach(element => {
          this.userList.push({
            $key: element.key,
            ...element.payload.val()
          });
        });

        const newVisit = {
          dateTime: new Date(),
          eventType: 'super event',
          purpose: this.visitReason
        };

        this.currentUser = this.userList[0];
        this.currentUser.visits.push(newVisit);

        this.addVisit(this.currentUser);
      });
      // .on("value",
      //   snapshot => {
      //     // console.log(snapshot);
      //
      //     // // This is roughly how to get the key for each user in the list
      //     // // we access the snaphot directly because .val() strips the key
      //     // snapshot.forEach(snapshot => {
      //     //   console.log(snapshot.val());
      //     //   console.log(snapshot.key);
      //     //   return true;
      //     // });
      //
      //     console.log(snapshot.val());
      //     this.userList = snapshot.val();
      //     this.currentUser = snapshot.val()[0];
      //
      //     console.log(new Date().toUTCString)
      //
      //     const newVisit = <Visit>{
      //       dateTime: new Date(),
      //       eventType: 'arrival',
      //       purpose: this.visitReason
      //     }
      //
      //     // if (this.currentUser.visits == null) {
      //     //   this.currentUser.visits = [newVisit]
      //     // } else {
      //     //   this.currentUser.visits.push(newVisit)
      //     // }
      //     // Just testing update (add visit) here
      //     // this.currentUser.lastName = 'borris';
      //
      //
      //     // this.currentUser.visits.push(newVisit)
      //     // this.currentUser.visits = this.currentUser.visits.push(newVisit)
      //
      //     // this.addVisit(this.currentUser, 0);
      //   },
      //   errorObject =>  console.log("The read failed: " + errorObject.code)
      // );

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
