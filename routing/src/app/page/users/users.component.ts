import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  list$: Observable<User | User[]> = this.userService.get();
  cols: any[] = this.config.userColumns;

  constructor(
    private userService: UserService,
    private config: ConfigService,
  ) { }

  ngOnInit() {
  }

  update(user: User): void {
    this.userService.update(user).toPromise().then(
      userResponse => console.log(userResponse),
      err => console.error(err)
    );
  }

  updateAll() {
    this.userService.get().toPromise().then(
      async (users: User[]) => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < users.length; i++) {
          users[i].password = 'test';
          const res = await this.userService.update(users[i]).toPromise();
          console.log(res);
        }
      }
    );
  }

}
