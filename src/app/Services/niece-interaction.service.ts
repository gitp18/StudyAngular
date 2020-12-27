import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NieceInteractionService {
 private _saraSubject = new Subject<string>();
 saraMsg$ = this._saraSubject.asObservable();

  saraProperty1 = '';
  constructor() { }

  saraMethod1 = function saraMethod1() {
    
  }

  sendMsg(msg: string, msgTtype: string){
   this._saraSubject.next(msg);
  }
}
