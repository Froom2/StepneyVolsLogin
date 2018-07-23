import { Component, OnInit } from '@angular/core';
import { SignInService } from '../../../services/sign-in.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-month-leave',
  templateUrl: './month-leave.component.html',
  styleUrls: ['../../../app.component.css', './month-leave.component.css']
})
export class MonthLeaveComponent implements OnInit {

  constructor(private signInService: SignInService, private router: Router) { }

  getMonths() {
    return this.signInService.months
  }

  selectMonth(receiver) {
    this.signInService.setMonth(receiver.target.innerText)
    this.router.navigate(['/day-leave']);
  }

  ngOnInit() {
  }

}
