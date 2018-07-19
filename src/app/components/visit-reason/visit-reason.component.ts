import { Component, OnInit } from '@angular/core';
import { SignInService } from '../../services/sign-in.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-visit-reason',
  templateUrl: './visit-reason.component.html',
  styleUrls: ['../../app.component.css', './visit-reason.component.css']
})
export class VisitReasonComponent implements OnInit {

  constructor(private signInService: SignInService, private router: Router) { }

  ngOnInit() {
  }

  getVisitReasons() {
    return this.signInService.visitReasons;
  }
  selectVisitReason(receiver) {
    this.signInService.setReason(receiver.target.innerText);
    this.signInService.selectVisitReason();
    this.router.navigate(['/thankyou']);
  }

}
