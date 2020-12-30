import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  getClassCss(flag: string){
    return (flag === 'mode') ? {'one': true, 'two': true} : {'one': false, 'two': false};
  }

}
