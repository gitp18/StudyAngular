import { Component } from '@angular/core';
//import { Service } from './service';

import { HttpClient } from '@angular/common/http';
//import { environment } from 'src/environments/environment';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-crud',
  templateUrl: './simple-crud.component.html',
  styleUrls: ['./simple-crud.component.css']
})
export class SimpleCRUDComponent {
  readonly apiBaseUrl = 'http://localhost:5001'; //environment.hostUrl;
  id: number = 0;
  name: string = '';

  authorList: any; authorMsg: string;

  constructor(  private _http: HttpClient) {
    this.getAuthorList();
  }
  
  createAuthor(formData: NgForm) {
    if(formData.value.id !== 0) {
      this._http.put(this.apiBaseUrl+'/authors/' + formData.value.id, formData.value).subscribe((res: any) => {
				window.location.reload();
		  });
    } else {
      this._http.post(this.apiBaseUrl+'/authors', formData.value).subscribe((res: any) => {
          //console.log(res, formData.value);
          this.name = '';
          this.getAuthorList();
          //window.location.reload();
      });
    }
  }
  
  deleteAuthor(id) {
    this._http.delete(this.apiBaseUrl+'/authors/' + id).subscribe(
      res => {
        this.authorMsg = " Record deleted successfully!";
        this.getAuthorList();
      },
      err => {
        console.log('err: ', err);
        this.authorMsg = "Record deletion failed!";
      }
    );
  }

  editAuthor(id){
    this._http.get(this.apiBaseUrl+'/authors/' + id).subscribe(
      res => {
        //console.log('res: ', res, typeof res, res['id'], res['name'], typeof res['id']);
        this.id = res['id'];
        this.name = res['name'];
      },
      err => {
        console.log('err: ', err);
        this.authorMsg = err.error.message;
      }
    );
  }

  getAuthorList(){
    this._http.get(this.apiBaseUrl+'/authors').subscribe(
      res => {
        this.authorList = res;//res['data'];
        //console.log('res: ', res);
        this.authorMsg = this.authorList.length + " record(s) found";
      },
      err => {
        console.log('err: ', err);
        this.authorMsg = err.error.message;
      }
    );
  }
}
