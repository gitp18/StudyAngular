import { Component } from '@angular/core';
//import { Employee } from '../Models/user.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  /*employee: Employee = {
    name: null,
    email: null,
    gender: null,
    department: null,
    isActive: null
  }*/
  departments = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'}
  ]
  constructor() { }

  ngonSubmit(){
  }

}
