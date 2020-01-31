import { Component, Input, OnChanges, OnInit, SimpleChanges, SimpleChange, DoCheck, KeyValueDiffers  } from '@angular/core';
import { Customer } from 'src/app/model/customer';


// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-docheck-child',
  templateUrl: './docheck-child.component.html',
  styleUrls: ['./docheck-child.component.css']
})
export class DocheckChildComponent implements OnChanges, DoCheck, OnInit {
    @Input() message: string;
    @Input() customer: Customer;
    changelog: string[] = [];
    oldCustomer: Customer = new Customer();
    DocheckCount = 0;

    differ: any;

    constructor(private differs: KeyValueDiffers) {
    }

    ngOnInit() {
        console.log('OnInit');
        this.differ = this.differs.find(this.customer).create();
    }

    ngDoCheck() {
        console.log('Docheck');
        this.DocheckCount++;
        if (this.oldCustomer.name !== this.customer.name || this.oldCustomer.code !== this.customer.code ) {
            const to  = JSON.stringify(this.customer);
            const from = JSON.stringify(this.oldCustomer);
            const changeLog = `DoCheck customer: changed from ${from} to ${to} `;
            this.changelog.push(changeLog);

            this.oldCustomer = Object.assign({}, this.customer);
        }

        // Better way.
        /* const customerChanges = this.differ.diff(this.customer);
        if (customerChanges) {
            console.log(customerChanges);
            customerChanges.forEachChangedItem(r =>  this.changelog.push('changed ' + r.key + ' ' + JSON.stringify( r.currentValue)));
            customerChanges.forEachAddedItem(r =>  this.changelog.push('added ' + r.key + ' ' + JSON.stringify( r.currentValue)));
            customerChanges.forEachRemovedItem(r =>  this.changelog.push('removed ' + r.key + ' ' + JSON.stringify( r.currentValue)));
        } */
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('OnChanges');
        console.log(JSON.stringify(changes));

        // tslint:disable-next-line:forin
        for (const propName of Object.keys(changes)) {
             const change = changes[propName];
             const to  = JSON.stringify(change.currentValue);
             const from = JSON.stringify(change.previousValue);
             const changeLog = `${propName}: changed from ${from} to ${to} `;
             this.changelog.push(changeLog);
        }
    }
}
