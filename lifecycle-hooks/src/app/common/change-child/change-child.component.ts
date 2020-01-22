import { Component, OnInit, Input, SimpleChanges, KeyValueDiffer, KeyValueDiffers } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-change-child',
  templateUrl: './change-child.component.html',
  styleUrls: ['./change-child.component.css']
})
export class ChangeChildComponent implements OnInit {

  @Input() counter: number;
  @Input() counterObject: any;
  changeLog: string[] = [];
  private objectDiffer: KeyValueDiffer<any, any>;

  constructor(
    private differs: KeyValueDiffers
  ) {

  }

  ngOnInit() {
    this.objectDiffer.diff(changes => {
      console.log(changes);
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    this.objectDiffer = this.differs.find(this.counterObject).create();

    console.log(changes);
    for (const propName of Object.keys(changes)) {
      this.changeLog.push(`SimpleChange: ${JSON.stringify(changes, null, 4)}`);
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngDoCheck() {
    const diff = this.objectDiffer.diff(this.counterObject);
    console.log(diff);
  }

}
