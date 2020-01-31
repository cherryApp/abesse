import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-oninit',
  templateUrl: './oninit.component.html',
  styleUrls: ['./oninit.component.css']
})
export class OninitComponent implements OnInit {

  dataSubscription: Subscription;
  realData: any;

  constructor(
    private testService: TestService
  ) { }

  ngOnInit() {
    this.dataSubscription = this.testService.dataSource.subscribe(
      data => this.realData = data
    );
  }

}
