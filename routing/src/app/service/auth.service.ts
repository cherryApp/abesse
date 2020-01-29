import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { User } from '../model/user';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = `${this.config.apiUrl}login`;
  logoutUrl = `${this.config.apiUrl}logout`;
  currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);
  lastToken: string = null;

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
  ) {
    const localUser: string = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localUser)
    );
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(loginData: User): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(
      this.loginUrl,
      { email: loginData.email, password: loginData.password }
    )
    .pipe( switchMap( response => {
      if (response.accessToken) {
        this.lastToken = response.accessToken;
        return this.userService.query(`email=${loginData.email}`);
      }
      return of(null);
    }))
    .pipe(
      tap( user => {
        if (!user) {
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        } else {
          user[0].token = this.lastToken;
          localStorage.setItem('currentUser', JSON.stringify(user[0]));
          this.currentUserSubject.next(user[0]);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['login']);
  }
}
