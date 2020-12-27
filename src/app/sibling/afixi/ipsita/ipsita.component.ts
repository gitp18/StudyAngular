import { Component, OnInit } from '@angular/core';
import { NieceInteractionService } from 'src/app/Services/niece-interaction.service';

@Component({
  selector: 'app-ipsita',
  templateUrl: './ipsita.component.html',
  styleUrls: ['./ipsita.component.css']
})
export class IpsitaComponent implements OnInit {
  prop1 = ''; 
  
  constructor(private _nieceInteractionService: NieceInteractionService) { }

  ngOnInit() {
    this._nieceInteractionService.saraMsg$.subscribe(msg => {
      //console.log(msg);
      //this.prop1 = msg + '---' +this._nieceInteractionService.saraProperty1;
      this._nieceInteractionService.saraMethod1();
    });
  }

}
