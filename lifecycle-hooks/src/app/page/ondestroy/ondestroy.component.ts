// tslint:disable: use-lifecycle-interface
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestService } from 'src/app/service/test.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-ondestroy',
  templateUrl: './ondestroy.component.html',
  styleUrls: ['./ondestroy.component.css']
})
export class OndestroyComponent implements OnInit {

  intervalSubscription: Subscription;
  realData: any;
  changeLog: string[] = [];

  // Solution 2.
  private subList: Subscription[] = [];
  set sub(s: Subscription) {
    this.subList.push(s);
  }

  // Solution 3.
  private subsIsRunnings = true;

  constructor(
    private testService: TestService
  ) { }

  ngOnInit() {
    this.testService.intervalSource.subscribe(
      data => this.changeLog.push(data.toString())
    );

    // Solution 2.
    /* this.sub = this.testService.intervalSource.subscribe(
      data => this.changeLog.push(data.toString())
    ); */

    // Solution 3.
    /* this.intervalSubscription = this.testService.intervalSource.pipe(
      takeWhile( () => this.subsIsRunnings )
    ).subscribe(
      data => this.changeLog.push(data.toString())
    ); */
  }

  // Solution 3.
  stopSubs(): void {
    this.subsIsRunnings = false;
  }

  reset() {
    this.changeLog = [];
  }

  getAll(): void {
    for (const p in this) {
      if (this.hasOwnProperty(p) && this[p] instanceof Subscription) {
          console.log(this[p]);
          // (this[p] as unknown as Subscription).unsubscribe();
      }
  }
  }

  ngOnDestroy() {
    // Solution 1.
    this.intervalSubscription.unsubscribe();

    // Solution 2.
    /* for (const subscription of this.subList) {
      subscription.unsubscribe();
    } */

    // Solution 3.
    // this.stopSubs();
  }

}
