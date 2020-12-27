import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit{

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit(){
    this._elementRef.nativeElement.style.color = 'red';
  }

  change(changedColor: string){
    this._elementRef.nativeElement.style.color = changedColor;
  }
}
