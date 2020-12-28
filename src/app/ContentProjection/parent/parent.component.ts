import { Component } from '@angular/core';


@Component({
  selector: 'content-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ContentParentComponent {
  constructor() { }
  departmentList = ['Front Desk', 'HR', 'Admin', 'Developement'];
}
