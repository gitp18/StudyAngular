import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterChildComponent } from './counter-child/counter-child.component';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent {
  @ViewChild(CounterChildComponent, {static: true}) counterComponent: CounterChildComponent;
  constructor() { }

  increase() {
    this.counterComponent.increaseByOne();
  }
  decrease() {
    this.counterComponent.decreaseByOne();
  }

}
