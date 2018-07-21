import { Component, OnInit } from '@angular/core';
import { SignInService } from '../../services/sign-in.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['../../app.component.css', './day.component.css']
})
export class DayComponent implements OnInit {

  constructor(private signInService: SignInService, private router: Router) { }

  selectDay(receiver) {
    this.signInService.setDayBorn(receiver.target.innerText)
    this.router.navigate(['/visit-reason']);
  }

  daysInMonthBorn() {
    return this.signInService.daysInMonthBorn
  }

  ngOnInit() {
  }

}
