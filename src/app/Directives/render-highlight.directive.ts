import { Directive, ElementRef, OnInit, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]'
})
export class RenderHighlightDirective implements OnInit {

  constructor(private _elRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit(){
    this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('click') onClick(){
    this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseover') onMouseOver(){
    this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'green');
  }
}
