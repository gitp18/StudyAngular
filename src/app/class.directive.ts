import { Directive, ElementRef   , Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  // constructor(private _element: ElementRef) {
  //   this._element.nativeElement.style.backgroundColor = 'blue';
  // }

  
  constructor(private _element: ElementRef) {}
  @Input() set backgroundColor(color: 'orange'){
    this._element.nativeElement.style.backgroundColor = color;
  }

}