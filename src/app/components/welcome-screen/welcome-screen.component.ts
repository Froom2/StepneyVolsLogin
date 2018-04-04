import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {

  // look up why this doesn't need declared as const
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

  formHidden = true;

  ngOnInit() {
  }

  showForm() {
    this.formHidden = !this.formHidden;
  }
}
