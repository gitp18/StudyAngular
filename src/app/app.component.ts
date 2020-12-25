import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudyAngular';
  eventBindVal = '';
  propertyBindVal = '';
  attrBindVal = 'Pay Here';

  email = 'abc@gmail.com';
  firstName = '';
  onKeyUp(){
    this.firstName = this.email+'-';
    console.log(this.email, 'Enter has been clicked');
  }
  
  
  onClick(){
    this.eventBindVal = 'Event Binding!';
    this.propertyBindVal = 'Property Binding!';
  }
}
