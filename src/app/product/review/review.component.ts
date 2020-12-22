import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  review: string = 'Good';  
  rating = 10;

  @Output() _clickReview: EventEmitter<any> = new EventEmitter();
  @Output() _clickRating: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  addReview(){
    this._clickReview.emit(this.review);
  }

  addRating(){
    this._clickRating.emit(this.rating);
  }

}
