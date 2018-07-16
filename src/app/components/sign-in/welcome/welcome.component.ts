import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SignInService} from '../../../services/sign-in.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private signInService: SignInService) { }

  ngOnInit() {
  }

  showMonths() {
    this.router.navigate(['months'])
      .catch(err => console.error(err));
  }
}
