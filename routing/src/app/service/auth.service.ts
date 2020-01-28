import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { User } from '../model/user';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = `${this.config.apiUrl}login`;
  logoutUrl = `${this.config.apiUrl}logout`;
  user: User = null;
  userSubject: Subject<User> = new Subject();

  constructor(
    private config: ConfigService,
    private http: HttpClient,
  ) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(
      this.loginUrl,
      {email: user.email, password: user.password}
    ).pipe(
      tap( userResponse => {
        this.user = userResponse ? userResponse : null;
        this.userSubject.next(this.user);
      })
    );
  }
}
