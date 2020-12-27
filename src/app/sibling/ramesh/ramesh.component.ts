import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/Services/interaction.service';


@Component({
  selector: 'app-ramesh',
  templateUrl: './ramesh.component.html',
  styleUrls: ['./ramesh.component.css']
})
export class RameshComponent implements OnInit {
  msg = '';
  constructor(private _interactionService: InteractionService) { }

  ngOnInit() {
    this._interactionService.udemyMsg$.subscribe(msg => {
      this.msg = 'Message To Ramesh: ' + msg;
    });
  }
  
}
