import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {

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

  months = Object.keys(this.monthInfo);
  monthBorn = '';
  dayBorn = 0;

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
    this.currentFormElement = FormElements.Thanks;
    this.dayBorn = receiver.target.innerText;
  }

  ngOnInit() {
  }

}

export enum FormElements {
  Months,
  Days,
  Thanks,
  Welcome
}
