import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  templateUrl: './counter-child.component.html',
  styleUrls: ['./counter-child.component.css']
})
export class CounterChildComponent {
  msg = '';
  counter = 0;

  constructor() { }

  increaseByOne() {
    this.counter++;
    this.msg = 'Counter: ' + this.counter;
  }
  
  decreaseByOne() {
    this.counter--;
    this.msg = 'Counter: ' + this.counter;
  }

}
