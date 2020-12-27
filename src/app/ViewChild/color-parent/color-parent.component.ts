import { Component, ViewChild } from '@angular/core';
import { ChangeColorDirective } from 'src/app/Directives/change-color.directive';


@Component({
  selector: 'app-color-parent',
  templateUrl: './color-parent.component.html',
  styleUrls: ['./color-parent.component.css']
})
export class ColorParentComponent {
  @ViewChild(ChangeColorDirective, {static: true}) changeColorDirective: ChangeColorDirective;
  constructor() { }

  changeColor(color: string) {
    this.changeColorDirective.change(color);
  }

}
