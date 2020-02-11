import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    uri:string = 'https://node-devio.appspot.com';
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient,
                private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.uri}/auth/login`, { email, password })
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.router.navigate(['/user']);
          return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  createNewUser(email: string, password: string, username: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        `${this.uri}/auth/signup`,
        { email: email, password: password, username: username })
        .subscribe(
          () => {
            this.login(email, password)
            this.router.navigate(['/user'])
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
    }
  
}