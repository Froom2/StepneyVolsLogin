import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  loginForm: FormGroup
	
  constructor(formBuilder: FormBuilder,
    public authenticationService: AuthenticationService,
    public router: Router,
    public afAuth: AngularFireAuth) {

		this.loginForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }

  login() {
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
      .then(data => {
        console.log(`sign in data : ${data}`)
        this.router.navigate(['/welcome']);
      })
      .catch(error => {
        console.error(error);
      });
  }

  logout() {
    this.authenticationService.logout()
      .then(data => {
        console.log(data);
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.error(error);
      })
  }
}
