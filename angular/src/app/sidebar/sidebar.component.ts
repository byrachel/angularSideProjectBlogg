import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNewPost() {
    // if(this.isAuth) {
    this.router.navigate(['/post/create']);
    // }
    // else {
    //   this.router.navigate(['/signup']);
    // }
  }

}
