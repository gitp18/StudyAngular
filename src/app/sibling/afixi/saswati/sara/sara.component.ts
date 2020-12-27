import { Component, OnInit } from '@angular/core';
import { NieceInteractionService } from 'src/app/Services/niece-interaction.service';

@Component({
  selector: 'app-sara',
  templateUrl: './sara.component.html',
  styleUrls: ['./sara.component.css']
})
export class SaraComponent implements OnInit {
  saraProperty1 = 'SaraProperty1';
  saraProperty2 = 'SaraProperty2';
  
  constructor(private _nieceInteractionService: NieceInteractionService) { }

  ngOnInit() {
    this._nieceInteractionService.saraProperty1 = this.saraProperty1;
    this._nieceInteractionService.saraMethod1 = this.saraMethod1;
    this._nieceInteractionService.sendMsg('Hi','hello');
  }
  
  saraMethod1(){
    //alert('Sara Method1');
  }

  saraMethod2(){
    //alert('Sara Method2');
  }
  
  sendTeady(){

  }
}
