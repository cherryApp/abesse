// tslint:disable: use-lifecycle-interface
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-child-view',
  template: `<input [(ngModel)]="hero">`
})
export class ChildViewComponent {
  hero = 'Magneta';
}

//////////////////////
@Component({
  selector: 'app-after-view',
  template: `
    <div>-- child view begins --</div>
      <app-child-view></app-child-view>
    <div>-- child view ends --</div>
    <p *ngIf="comment" class="comment">
      {{comment}}
    </p>
  `
})
export class AfterViewComponent {
  private prevHero = '';
  comment = '';

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildViewComponent, {static: false}) viewChild: ChildViewComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterView constructor');
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    const c = this.viewChild.hero.length > 10 ? `That's a long name` : '';
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      this.logger.tick_then(() => this.comment = c);
    }
  }

  private logIt(method: string) {
    const child = this.viewChild;
    const message = `${method}: ${child ? child.hero : 'no'} child view`;
    this.logger.log(message);
  }
  // ...
}

@Component({
  selector: 'app-afterview',
  templateUrl: './afterview.component.html',
  styleUrls: ['./afterview.component.css']
})
export class AfterviewComponent {

  show = true;

  constructor(public logger: LoggerService) {
  }

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterViewComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }

}
