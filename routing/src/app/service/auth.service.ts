import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { User } from '../model/user';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = `${this.config.apiUrl}login`;
  logoutUrl = `${this.config.apiUrl}logout`;
  currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private userService: UserService,
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
        return this.userService.query(`email=${loginData.email}`);
      }
      return of(null);
    }))
    .pipe(
      tap(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
