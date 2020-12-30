import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contentchild-child',
  templateUrl: './contentchild-child.component.html',
  styleUrls: ['./contentchild-child.component.css']
})

export class ContentchildChildComponent {
  @ContentChild('helloDiv', {static: true}) divRefVal: ElementRef;
  
  clickButton(){
      alert(this.divRefVal.nativeElement.innerHTML);
  }
}
