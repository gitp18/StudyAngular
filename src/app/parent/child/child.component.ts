import { Component, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

/*const navigationExtras: NavigationExtras = {
  state: {
    transd: 'TRANS001',
    workQueue: false,
    services: 10,
    code: '003'
  }
};*/


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() empListData = [];

  constructor(private _router: Router) {}
  empList(emp){
    //console.log(emp);
    this._router.navigate(['/newpage'], { state: emp });
    //this._router.navigate(['newComponent'], navigationExtras);

  }

  get filterByNos() {
    return this.empListData.slice(0,2);//.filter( x => x.age > 18);
  }
}
