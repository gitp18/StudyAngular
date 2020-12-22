import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  review = '';
  rating = 0;

  constructor() { }

  ngOnInit() {
  }
  
  reviewDataFromChildCompo($event){
    this.review = $event;
  }
  
  ratingDataFromChildCompo($event){
    this.rating = $event;
  }
}
