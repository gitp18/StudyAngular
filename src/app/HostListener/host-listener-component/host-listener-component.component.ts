import { Component, ElementRef, Renderer, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listener-component',
  templateUrl: './host-listener-component.component.html',
  styleUrls: ['./host-listener-component.component.css']
})
export class HostListenerComponentComponent {
  title ='Host Binding';
  constructor(private _el: ElementRef, private _renderer: Renderer) {  } 

  @HostListener('click') onClick(){
    alert('Click event got fired!');
  }

  @HostListener('mouseover') onMouseOver(){
    this.changeColor('green');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.changeColor('blue');
  }

  changeColor(colorVal: string){
    this._renderer.setElementStyle(this._el.nativeElement, 'color', colorVal);
  }

}
