import { Component } from '@angular/core';

@Component({
  selector: 'all-selector-child',
  template: `<div class="countrySeg">
              <ng-content select=".countryName"></ng-content>
              <ng-content select="[id=descId]"></ng-content>
              <ng-content select="[capital]"></ng-content>
              <ng-content select="[capital]"></ng-content>
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
