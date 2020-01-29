import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  serverError = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onLogin(ngForm: NgForm): void {
    this.authService.login(ngForm.value).toPromise().then(
      userResponse => {
        if (this.authService.currentUserValue) {
          this.router.navigate(['/']);
        }
      },
      err => {
        this.serverError = err.error;
        const to = setTimeout( () => {
          clearTimeout(to);
          this.serverError = '';
        }, 3000);
      }
    );
  }

}
