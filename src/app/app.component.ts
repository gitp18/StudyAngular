import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'map';
  
  courses = [
    {"id": 1, "title": "Angular"},
    {"id": 2, "title": "React"},
    {"id": 3, "title": "Veu"},
    {"id": 4, "title": "Next"}
  ]

  /*setViewMode(type){
    this.viewMode = type;
  } */ 
  
}
