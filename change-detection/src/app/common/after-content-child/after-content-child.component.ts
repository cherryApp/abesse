import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-after-content-child',
  templateUrl: './after-content-child.component.html',
  styleUrls: ['./after-content-child.component.css']
})
export class AfterContentChildComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
