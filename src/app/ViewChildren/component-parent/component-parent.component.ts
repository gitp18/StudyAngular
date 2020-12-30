import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ComponentChildComponent } from './component-child/component-child.component';

@Component({
  selector: 'app-component-parent',
  templateUrl: './component-parent.component.html',
  styleUrls: ['./component-parent.component.css']
})
export class ComponentParentComponent {
  @ViewChildren(ComponentChildComponent) child: QueryList<ElementRef>
  
  valFromChild = '';
  buttonClick() {
    this.child.forEach(item => {
      this.valFromChild += 'abc' ;
      console.log(item);
     // alert(it);
    });
  }

}
