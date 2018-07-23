import { Component, OnInit } from '@angular/core';
import { SignInService } from '../../../services/sign-in.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-day-leave',
  templateUrl: './day-leave.component.html',
  styleUrls: ['../../../app.component.css', './day-leave.component.css']
})
export class DayLeaveComponent implements OnInit {

  constructor(private signInService: SignInService, private router: Router) { }

  selectDay(receiver) {
    this.signInService.setDayBorn(receiver.target.innerText);
    this.signInService.setReason('Leaving');
    this.signInService.submitVisit('leave');
    this.router.navigate(['/thankyou']);
  }

  daysInMonthBorn() {
    return this.signInService.daysInMonthBorn
  }

  ngOnInit() {
  }

}
