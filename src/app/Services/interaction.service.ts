import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private _udemyMsgService = new Subject<string>();
  udemyMsg$ = this._udemyMsgService.asObservable();

  constructor() { }

  sendMsg(msg: string, msgTtype: string){
    //alert(msgTtype);
    this._udemyMsgService.next(msg);//, msgTtype);
    
  }
  
}
