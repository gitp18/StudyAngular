import { Component, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-binding',
  templateUrl: './host-binder.component.html',
  styleUrls: ['./host-binder.component.css']
})
export class HostBindingComponent {
  title = 'Host Bindig';
  //constructor(private _elRef: ElementRef, private _renderer: Renderer2) {  } 
  @HostBinding('style.background-color') colrVal: string;

  @HostListener('click') onClick(){
    this.colrVal = 'yellow';
  }

  @HostListener('mouseover') onMouseOver(){
    this.colrVal = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.colrVal = 'green';
  }
}
