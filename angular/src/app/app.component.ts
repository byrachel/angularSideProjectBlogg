import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  currentUser: User;

constructor(
  private router: Router,
  private authenticationService: AuthenticationService
) {
  this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

onSignOut() {
    this.authenticationService.logout();
    this.router.navigate(['/signup']);
}

}