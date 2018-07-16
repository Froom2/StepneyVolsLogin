import { Component, OnInit } from '@angular/core';
import {SignInService} from '../../../services/sign-in.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.css']
})
export class ReasonComponent implements OnInit {

  constructor(private signInService: SignInService, private router: Router) { }

  ngOnInit() {
  }

  getVisitReasons() {
    return this.signInService.visitReasons;
  }

  setVisitReason(receiver) {
    this.signInService.setVisitReason(receiver.target.innerText);
    this.signInService.addVisit();
    this.router.navigate(['thank-you']);
  }
}
