import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  loginForm: FormGroup
	
	constructor(formBuilder: FormBuilder, public afAuth: AngularFireAuth, private router: Router) {

		this.loginForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }
  
  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
      .then(data => {
        console.log(data)
        this.router.navigate(['/login']);
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
	}

}
