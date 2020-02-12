import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;
  loginForm: FormGroup;
  error = '';
  message: string = '';
  success: boolean = false;

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

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
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
