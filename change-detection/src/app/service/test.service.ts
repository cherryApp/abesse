import { Injectable } from '@angular/core';
import { of, Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  dataSource: Observable<any> = of(42);
  intervalSource: Observable<number> = interval(1000);

  constructor() { }
}
