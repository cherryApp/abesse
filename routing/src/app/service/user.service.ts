import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  entity = 'users';

  constructor(
    private http: HttpClient,
    private config: ConfigService,
  ) { }

  get(id?: string | number): Observable<User | User[]> {
    let url = `${this.config.apiUrl}${this.entity}`;
    if (id) {
      url += `/${id}`;
    }

    return this.http.get<User[]>(url).pipe(
      map( users => id ? users[0] : users )
    );
  }
}
