// tslint:disable: use-lifecycle-interface
// tslint:disable: component-class-suffix
// tslint:disable: component-selector
// tslint:disable: directive-selector
// tslint:disable: directive-class-suffix
import { Component, OnInit, ContentChild, ContentChildren, forwardRef, QueryList,
  Input, Directive } from '@angular/core';
import { AfterContentChildComponent } from '../../common/after-content-child/after-content-child.component';
import { interval } from 'rxjs';
import { takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-aftercontent',
  templateUrl: './aftercontent.component.html',
  styleUrls: ['./aftercontent.component.css']
})
export class AftercontentComponent implements OnInit {

  changeLog: string[] = [];
  private prevName = '';
  baseName = '';
  shouldShow = true;

  // Query for a CONTENT child of type `ChildComponent`
  // @ContentChild(AfterContentTestchildComponent, {static: false}) pane !: AfterContentTestchildComponent;
  // @ContentChild(Pane, {static: false}) pane !: Pane;

  constructor() { }

  ngOnInit() {
    interval(1000).pipe(takeWhile( n => n < 10 )).subscribe(
      num => {
        const rand = Math.floor(Math.random() * 3);
        this.changeName(['Jack', 'Joe', 'Jim'][rand]);
      }
    );
  }

  ngAfterContentInit() {
    this.changeLog.push('AfterContentInit');
  }

  ngAfterContentChecked() {
    this.changeLog.push('AfterContentChecked');
  }

  toggle() {
    this.shouldShow = !this.shouldShow;
  }

  changeName(name) {
    this.baseName = name;
  }

}



