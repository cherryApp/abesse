import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navigation: any[] = this.config.navigation;

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit() {
  }

}
