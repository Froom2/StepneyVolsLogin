import { Component, OnInit } from '@angular/core';
import {SignInService} from '../../../services/sign-in.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css']
})
export class MonthsComponent implements OnInit {

  constructor(private signInService: SignInService, private router: Router) { }

  getMonths() {
    return this.signInService.months;
  }

  setMonth(receiver) {
    this.signInService.setMonth(receiver.target.innerText);
    this.router.navigate(['days']);
  }

  ngOnInit() {
  }

}
