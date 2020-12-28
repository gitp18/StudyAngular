import { Component } from '@angular/core';

@Component({
  selector: 'all-selector-child',
  template: `<div class="countrySeg">
              <h3>India</h3>
              <p>India description</p>
              <h4>New Delhi</h4>
              <h5>Asia</h5>
            </div>`,
  styles: [`
            .countrySeg {
              background-color : orange;
              color: paleturquoise;
              padding: 20px;
              width: 30%;
            }`
          ]
})
export class AllselectorChildComponent {

  constructor() { }
}
