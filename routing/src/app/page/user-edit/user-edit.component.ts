import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = null;
  serverError = '';

  constructor(
    private userService: UserService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.ar.params.pipe(
      switchMap( params => this.userService.get(params.id) )
    )
    .pipe( take(1) )
    .subscribe(
      user => {
        this.user = (user as User);
        this.user.password = '';
      }
    );
  }

  onSubmit(ngForm: NgForm): void {
    const putObject = Object.assign({id: this.user.id}, ngForm.value);
    this.userService.update(putObject)
      .toPromise().then(
        user => history.back(),
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
