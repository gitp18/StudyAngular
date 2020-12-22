import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pvt-office',
  templateUrl: './pvt-office.component.html',
  styleUrls: ['./pvt-office.component.css']
})
export class PvtOfficeComponent implements OnInit {
  @Input() pvtData = {};
  constructor() { }

  ngOnInit() {
  }

}
