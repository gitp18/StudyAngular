import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements AfterViewInit {
  @ViewChild('name', {static: true}) nameElement: ElementRef;
  @ViewChild('state', {static: true}) stateElement: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    this.nameElement.nativeElement.style.backgroundColor = 'black';
    this.nameElement.nativeElement.style.color = 'white';

    this.stateElement.nativeElement.style.backgroundColor = 'cyan';
    this.stateElement.nativeElement.style.color = 'red';
  }

}
