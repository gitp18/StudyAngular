import { increment, reset, decrement } from 'src/app/Store/Counter/counter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ngrx-counterbutton',
  templateUrl: './ngrx-counterbutton.component.html',
  styleUrls: ['./ngrx-counterbutton.component.css']
})
export class NgrxCounterbuttonComponent implements OnInit {
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit(): void {}

  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}