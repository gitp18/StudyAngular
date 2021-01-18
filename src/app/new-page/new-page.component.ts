import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent {
  data: any;
  constructor(private _router: Router) {
    this.data = this._router.getCurrentNavigation().extras.state;
  }

}
