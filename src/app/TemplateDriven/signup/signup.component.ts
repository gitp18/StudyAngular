import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { Employee } from '../Models/user.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


// to get date_format
import { environment } from '../../../environments/environment';
const DATE_FORMAT = environment.DATE_FORMAT;

//For default pre-selected date
var dt = new Date();
var thisMonth = dt.getMonth();
var thisYear = dt.getFullYear();
  
var FirstDay = new Date(thisYear, thisMonth, 1); // GET THE FIRST DATE OF THE Given MONTH.
var LastDay = new Date(thisYear, thisMonth + 1, 0);  // GET THE FIRST DATE OF THE Given MONTH.



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  datePickerConfig: Partial<BsDatepickerConfig>;
  startDate = FirstDay; endDate = LastDay;


  /*employee: Employee = {
    full_name: null,
    cemail: "",
    pemail: ""
    gender: null,
    department: null,
    isActive: null
  }*/
  //postData = {full_name: "", cemail: "", pemail: "", gender: "", department: null, isActive: false};
  full_name = null;  cemail = null;  pemail = null;  gender = null;  department = null; isActive = true;
  email = '';

  
  departments = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'}
  ]
  constructor() {
    this.datePickerConfig  = Object.assign({},
      { 
        containerClass: 'theme-dark-blue',
        dateInputFormat: DATE_FORMAT
      });
  }

  onSubmit(MySignUpForm: NgForm){
    console.log(MySignUpForm.value);
  }
  // onSubmit1(empForm: Employee){
  //   console.log(empForm);
  // }
  
  onEditData(){
    this.full_name = "Abc";
    this.cemail = "abc@gmail.com";
    this.pemail = "pqr@gmail.com";
    this.gender = "male";
    this.department = "HR";
    this.isActive = true;
    //this.postData = {full_name: "Abc", cemail: "abc@gmail.com", pemail: "pqr@gmail.com", gender: "male", department: "HR", isActive: true};
  }

}
