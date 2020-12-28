import { Component } from '@angular/core';

@Component({
  selector: 'app-allselector-parent',
  templateUrl: './allselector-parent.component.html',
  styleUrls: ['./allselector-parent.component.css']
})
export class AllselectorParentComponent {

  constructor() { }

  countryObject = [
    { name: 'India', desc: 'India description', capital: 'New Delhi', continent: 'Asia' },
    { name: 'England', desc: 'England description', capital: 'London', continent: 'Europe' },
    { name: 'Brazil', desc: 'Brazil description', capital: 'Brasilia', continent: 'South America' },
    { name: 'South Africa', desc: 'South Africa description', capital: 'Cape Town', continent: 'Arfica' } 
  ];

}
