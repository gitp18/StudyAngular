import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  officeData = {
    "govtData": [
      {"n": "Yoga", "r": 3},
      {"n": "Photography", "r": 4},
      {"n": "Chess", "r": 2}
    ],
    "pvtData": {
      "students": 20,
      "classes": 100
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
