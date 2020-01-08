/* tslint:disable:forin */
import {
  Component, Input, OnChanges,
  SimpleChanges, ViewChild
} from '@angular/core';
import { interval } from 'rxjs';

class Hero {
  constructor(public name: string) {}
}

@Component({
  selector: 'on-changes',
  template: `
  <div class="hero">
    <p>{{hero.name}} can {{power}}</p>

    <h4>-- Change Log --</h4>
    <h5>Strongs: {{ toJson(strongs) }}</h5>
    <div *ngFor="let chg of changeLog">{{chg}}</div>
  </div>
  `,
  styles: [
    '.hero {background: LightYellow; padding: 8px; margin-top: 8px}',
    'p {background: Yellow; padding: 8px; margin-top: 8px}'
  ]
})
export class OnChangesComponent implements OnChanges {
  @Input() hero: Hero;
  @Input() heroName: string;
  @Input() power: string;
  @Input() strongs: number[];

  changeLog: string[] = [];

  toJson(data): string {
    return JSON.stringify(data);
  }

  // This not responds to the changes of collections.
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  reset() { this.changeLog = []; }
}

@Component({
  selector: 'on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styles: ['.parent {background: Lavender;}']
})
export class OnChangesParentComponent {
  hero: Hero;
  power: string;
  title = 'OnChanges';
  strongs: number[] = [1,2,3];
  @ViewChild(OnChangesComponent, {static: false}) childView: OnChangesComponent;

  constructor() {
    this.reset();

    interval(1000).subscribe(
      num => {
        if (num % 10 === 0) {
          this.strongs = new Array();
        } else {
          this.strongs.push(num);
        }
      }
    );
  }

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero('Windstorm');
    // setting power only triggers onChanges if this value is different
    this.power = 'sing';
    if (this.childView) { this.childView.reset(); }
  }
}
