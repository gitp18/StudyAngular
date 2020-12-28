import { Component, ContentChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contentchildren-child',
  templateUrl: './contentchildren-child.component.html',
  styleUrls: ['./contentchildren-child.component.css']
})
export class ContentchildrenChildComponent {
  @ContentChildren('helloDiv') div: QueryList <ElementRef>;
  
  clickButton(){
      this.div.forEach(element => {
        alert(element.nativeElement.innerHTML);  
      });
      
  }
}
