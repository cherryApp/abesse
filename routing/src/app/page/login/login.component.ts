import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  onLogin(ngForm: NgForm): void {
    this.authService.login(ngForm.value).toPromise().then(
      userResponse => console.log(userResponse),
      err => console.error(err)
    );
  }

}
