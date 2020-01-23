// tslint:disable: use-lifecycle-interface
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-change-child',
  templateUrl: './change-child.component.html',
  styleUrls: ['./change-child.component.css']
})
export class ChangeChildComponent implements OnInit {

  @Input() counter: number;
  @Input() counterObject: any;
  changeLog: string[] = [];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    for (const propName of Object.keys(changes)) {
      this.changeLog.push(`SimpleChange (${propName}): ${JSON.stringify(changes[propName], null, 4)}`);
    }
  }

}
