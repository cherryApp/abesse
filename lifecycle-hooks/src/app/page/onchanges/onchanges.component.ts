import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-onchanges',
  templateUrl: './onchanges.component.html',
  styleUrls: ['./onchanges.component.css']
})
export class OnchangesComponent implements OnInit {

  changeLog: string[] = [];
  counterNumber = 0;
  counterObject: {value: number} = {value: 0};

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    for (const propName of Object.keys(changes)) {
      this.changeLog.push(`SimpleChange: ${JSON.stringify(changes)}`);
    }
  }

  increase(): void {
    this.counterNumber++;
    this.counterObject.value++;
    // Solution 1:
    // this.counterObject = {value: this.counterObject.value + 1};
  }

}
