import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  data = [{name: "Tom", gender: "male", age: 21},
          {name: "Dick", gender: "male", age: 20},
          {name: "Harry", gender: "male", age: 22},
          {name: "Susen", gender: "female", age: 12}];

}
