import { Component, OnInit, NgZone } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from '../../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = {
    username : '',
    password : '',
    email: '',
    website: '',
    userId: '',
  }

  currentUser: User;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
                this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
              }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
    let id = this.user.userId;

  }
  onSignOut() {
    this.authenticationService.logout();
    this.router.navigate(['/posts']);
}

  onCreate() {
    this.router.navigate(['/post/create']);
  }

}
