import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
	readonly apiBaseUrl = environment.hostUrl;

	constructor( private _http: HttpClient ) { 
		//alert(this.apiBaseUrl);
	}
	
	getUserList(reData)  {
		return this._http.get(this.apiBaseUrl+'/userList');
	}
	
	
}
