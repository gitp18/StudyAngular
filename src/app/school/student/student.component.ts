import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  childData: string = 'Child Data';
	@Output() _clickEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  clickChild() {
		this._clickEvent.emit(this.childData);
			//	this._clickEvent.emit(jQuery("#LK_LAM_LA_ID").val());
		
	}
  ngOnInit() {
  }

}
