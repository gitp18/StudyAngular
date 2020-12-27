import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/Services/interaction.service';

@Component({
  selector: 'app-udemy',
  templateUrl: './udemy.component.html',
  styleUrls: ['./udemy.component.css']
})
export class UdemyComponent implements OnInit {
  constructor(private _interactionService: InteractionService) { }

  ngOnInit() { 
  }

  newCourseUploaded(){
    this._interactionService.sendMsg("'Javascript By Kyle Sympson', a new course has been uploaded", "new");
    console.log('newCourseUploaded');
  }
  
  existingCourseUpdated(){
    this._interactionService.sendMsg("'GraphQL by Stephen Grider' Course has been updated", "existing");
    console.log('existingCourseUpdated');
  }
}
