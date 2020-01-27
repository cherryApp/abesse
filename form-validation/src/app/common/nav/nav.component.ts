import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  links: {title: string, href: string}[] = [
    {title: 'Home', href: '/'},
    {title: 'Basic', href: '/base'},
    {title: 'Asynchronous', href: '/async'},
    {title: 'Cross Field', href: '/cross-field'},
    {title: 'Built in', href: '/built-in'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
