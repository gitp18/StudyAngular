import { Component, ViewChildren, ElementRef, QueryList } from '@angular/core';


@Component({
  selector: 'app-dom-parent',
  templateUrl: './dom-parent.component.html',
  styleUrls: ['./dom-parent.component.css']
})
export class DomParentComponent {
  @ViewChildren('firstname') fName: QueryList <ElementRef>

  buttonClick(){
    this.fName.forEach( item => {
      alert(item.nativeElement.value);
    })
  }
}
