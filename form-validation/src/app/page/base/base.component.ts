import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(ngForm: NgForm): void {
    if (ngForm.invalid) {
      return;
    }
    console.log(ngForm.form.value);
  }

}
