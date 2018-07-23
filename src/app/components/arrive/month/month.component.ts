import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from '../../../services/sign-in.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['../../../app.component.css', './month.component.css']
})
export class MonthComponent implements OnInit {

  constructor(private signInService: SignInService, private router: Router) { }

  getMonths() {
    return this.signInService.months
  }

  selectMonth(receiver) {
    this.signInService.setMonth(receiver.target.innerText)
    this.router.navigate(['/day']);
  }

  ngOnInit() {
  }

}
