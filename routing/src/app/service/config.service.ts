import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  navigation: {label: string, href: string, role: number}[] = [
    {label: 'Home', href: '', role: 1},
    {label: 'Users', href: '/users', role: 2},
  ];

  userColumns: {key: string, label: string}[] = [
    {key: 'id', label: '#'},
    {key: 'first_name', label: 'Firstname'},
    {key: 'last_name', label: 'Lastname'},
    {key: 'email', label: 'Email'},
    {key: 'role', label: 'Role'},
  ];

  apiUrl = 'http://localhost:3000/';

  constructor() { }
}
