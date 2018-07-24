import { Component, OnInit } from '@angular/core';
import { SignInService } from '../../../services/sign-in.service';
import { Router } from '@angular/router';
import { Reasons, VisitTypes } from '../../../models/enums';

@Component({
  selector: 'app-visit-reason',
  templateUrl: './visit-reason.component.html',
  styleUrls: ['../../../app.component.css', './visit-reason.component.css']
})
export class VisitReasonComponent implements OnInit {

  Reasons = Reasons;
  VisitTypes = VisitTypes;

  constructor(private signInService: SignInService, private router: Router) { }

  ngOnInit() {
  }

  selectVisitReason(receiver) {
    this.signInService.setReason(receiver.target.innerText);
    this.signInService.setSignInStatus(true);
    this.signInService.submitVisit(VisitTypes.Arrival);
    this.router.navigate(['/thankyou']);
  }

}
