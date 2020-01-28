import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-built-in',
  templateUrl: './built-in.component.html',
  styleUrls: ['./built-in.component.css']
})
export class BuiltInComponent implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(ngForm: NgForm): void {
    if (ngForm.invalid) {
      return;
    }

    console.log(ngForm.value);
  }

}
