import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  dataSource: Observable<any> = of(42);

  constructor() { }
}
