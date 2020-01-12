import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;
  loginForm: FormGroup;
  error = '';
  message:string = ''

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/user']);
    }
  }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSignup() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    this.authenticationService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/posts']);
      }
    ).catch(
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmitIn() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .subscribe(
        data => {
          return(this.message = 'Vous êtes connecté.');
        },
        error => {
            this.error = error;
        });
  }

}
