import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  links: {title: string, href: string}[] = [
    {title: 'Home', href: '/'},
    {title: 'OnChanges', href: '/onchanges'},
    {title: 'OnInit', href: '/oninit'},
    {title: 'DoCheck', href: '/docheck'},
    {title: 'AfterContent', href: '/aftercontent'},
    {title: 'AfterView', href: '/afterview'},
    {title: 'Destroy', href: '/ondestroy'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
