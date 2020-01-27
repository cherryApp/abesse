import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cross-field',
  templateUrl: './cross-field.component.html',
  styleUrls: ['./cross-field.component.css']
})
export class CrossFieldComponent implements OnInit {

  filter: {[propname: string]: string | number} = {
    name: '',
    minPrice: 0,
    maxPrice: 100
  };

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
