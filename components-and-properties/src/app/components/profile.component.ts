import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {
  title = 'Hello World';
  showAddress = true;
  person = {
    name: 'Madhu',
    age: 32,
    address: {
      street: 'Dwaraka nagar',
      city: 'Hyderabad',
      state: 'Telangana'
    },
    avatar:'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg',
    friends: [
      {name: 'Raj', age: 32},
      {name: 'Peter', age: 36},
      {name: 'Raman', age: 28},
      {name: 'Chandra', age: 30}
    ]
  }

  constructor(){
    this.title = 'User Profile';
  }
}
