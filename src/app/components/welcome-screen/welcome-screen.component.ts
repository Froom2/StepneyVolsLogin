import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { User, Visit } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {

  constructor(private dataService: DatabaseService,
    public router: Router) {}
    
    ngOnInit() {
    }

    showMonths() {
    this.router.navigate(['month']);
  }
  
}
