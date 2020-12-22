import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-govt-office',
  templateUrl: './govt-office.component.html',
  styleUrls: ['./govt-office.component.css']
})
export class GovtOfficeComponent implements OnInit {
  @Input() govtData = [];
 
  constructor() { }

  ngOnInit() {
  }

}
