import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {

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

  months = Object.keys(this.monthInfo);

  welcomeShown = true;
  monthsShown = false;
  daysShown = false;
  thankyouShown = false;
  monthBorn = '';
  dayBorn = 0;

  showMonths() {
    this.welcomeShown = false;
    this.monthsShown = true;
    this.daysShown = false;
  }

  selectMonth(receiver) {
    this.daysInMonth(this.monthInfo[receiver.target.innerText]);
    this.welcomeShown = false;
    this.monthsShown = false;
    this.daysShown = true;
    this.monthBorn = receiver.target.innerText;
  }

  daysInMonth(days) {
    const listOfDaysInMonth = Array.from(Array(days).keys()).map( function(value) {
      return value + 1;
    } );
    return listOfDaysInMonth;
  }

  selectDay(receiver) {
    this.welcomeShown = false;
    this.monthsShown = false;
    this.daysShown = false;
    this.thankyouShown = true;
    this.dayBorn = receiver.target.innerText;
  }

  ngOnInit() {
  }

}
