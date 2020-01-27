import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map, take, first } from 'rxjs/operators';
import { User } from '../model/user';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  serverUrl = `http://localhost:3000/employee`;

  constructor(
    private http: HttpClient,
  ) { }

  validate(ctrl: AbstractControl): Observable<ValidationErrors | null> {
    const email = ctrl.get('email');
    if (!email) {
      return of(null);
    }

    return this.http.get<User[]>(`${this.serverUrl}?email=${email.value}`)
      .pipe( map( data => data.length > 0 ? {emailExistsError: true} : null ))
      .pipe( first() );
  }
}
