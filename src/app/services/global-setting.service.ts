import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalSettingService {

  get httpUrlRoot(){
    return "http://101.200.58.3:9090/webapi/"
  }

  get httpUrl(){
    return "http://101.200.58.3/librarywebapi/"
  }

  constructor() { }
}
