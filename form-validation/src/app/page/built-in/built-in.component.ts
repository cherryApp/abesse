import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-built-in',
  templateUrl: './built-in.component.html',
  styleUrls: ['./built-in.component.css']
})
export class BuiltInComponent implements OnInit {

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
