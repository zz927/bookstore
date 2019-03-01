import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalSettingService } from './global-setting.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(public http:HttpClient,public gs:GlobalSettingService) { }


  getSectionList():Observable<any>{
    console.log(this.gs.httpUrlRoot)
      return this.http.get(this.gs.httpUrlRoot+'section?method=list')
  }

  getAdverList():Observable<any>{
    return this.http.get(this.gs.httpUrl+'advert/list')
  }

}
