import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class TempUserComponent {

  model: any = {};
  titleStatus = ['Mr', 'Miss', 'Mrs'];
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }

}
