import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //login_id = 'abc123@#';
  roleType = ['Admin', 'HR', 'Develope', 'Designer', 'Tester'];
  postData: any; 


  constructor() { }

  ngOnInit() {
  }
	onSubmit(signupData: NgForm) {
    this.postData = signupData.value;
    console.log(signupData.value);
  }

}
