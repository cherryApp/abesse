import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { AuthService } from 'src/app/service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  navigation: any[] = this.config.navigation;
  loginStatus = false;
  userSub: Subscription;

  constructor(
    private config: ConfigService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.userSub = this.authService.currentUserSubject.subscribe(
      user => this.loginStatus = user ? true : false
    );
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

}
