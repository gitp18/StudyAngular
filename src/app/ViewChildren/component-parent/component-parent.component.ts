import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ComponentChildComponent } from './component-child/component-child.component';

@Component({
  selector: 'app-component-parent',
  templateUrl: './component-parent.component.html',
  styleUrls: ['./component-parent.component.css']
})
export class ComponentParentComponent {
  @ViewChildren(ComponentChildComponent) child: QueryList<ElementRef>
  
  buttonClick() {
    this.child.forEach(item => {
      console.log(item);
      alert(item.title);
    });
  }

}
