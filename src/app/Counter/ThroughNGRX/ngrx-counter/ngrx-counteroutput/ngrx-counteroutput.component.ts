import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ngrx-counteroutput',
  templateUrl: './ngrx-counteroutput.component.html',
  styleUrls: ['./ngrx-counteroutput.component.css']
})
export class NgrxCounteroutputComponent implements OnInit {
  counter: number;
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.counter = data.counter;
    });
  }
}
