import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalSettingService } from './global-setting.service';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public http:HttpClient,public gs:GlobalSettingService) { }

  getBookList():Observable<any>{
    return this.http.get(this.gs.httpUrlRoot+'book?method=list');
  }

  getBookId(bookId:string):Observable<any>{
    return this.http.get(this.gs.httpUrlRoot+'book?method=getBookById&id='+bookId)
  }

}
