import { Component } from '@angular/core';

@Component({
  selector: 'child',
  template: `<div class="deptSeg">
                <ng-content select=".deptName"></ng-content>
                <p>Department Description</p>
                <ng-content select=".knowMore"></ng-content>
              </div>`,
  styles: [`
            .deptSeg {
              background-color : black;
              color: white;
              padding: 20px;
              width: 30%;
            }`
          ]
})

export class ContentChildComponent {

  constructor() { }

}
