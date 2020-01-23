import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-docheck',
  templateUrl: './docheck.component.html',
  styleUrls: ['./docheck.component.css']
})
export class DocheckComponent {

  title = 'ngOnChanges';
  message = '';
  customer: Customer = new Customer();
  name = '';
  code = 0;

  updateCustomer() {
    this.customer.name = this.name;
    this.customer.code = this.code;
  }

}
