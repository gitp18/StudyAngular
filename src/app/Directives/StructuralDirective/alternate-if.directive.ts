import { Directive, Input, OnChanges, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appAlternateIf]'
})
export class AlternateIfDirective implements OnChanges {

  @Input() appAlternateIf: boolean;
  constructor(private _vcRef: ViewContainerRef, private _templateRef: TemplateRef<any>) { }

  ngOnChanges(){
    if(this.appAlternateIf){
      this._vcRef.createEmbeddedView(this._templateRef);
    } else {
      this._vcRef.clear();
    }
  }
}
