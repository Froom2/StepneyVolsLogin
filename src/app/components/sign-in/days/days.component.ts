import { Component, OnInit } from '@angular/core';
import {SignInService} from '../../../services/sign-in.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {

  constructor(private signInService: SignInService, private router: Router) { }

  ngOnInit() {
  }

  getDays() {
    return this.signInService.days;
  }

  setDay(receiver) {
    this.signInService.setDays(receiver.target.innerText);
    this.router.navigate(['reason']);
  }
}
