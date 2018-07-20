import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['../../app.component.css', './thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout( function(t) {
    t.router.navigate(['/welcome']);
  }, 2000, this);
  }

}
