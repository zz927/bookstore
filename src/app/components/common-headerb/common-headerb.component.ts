import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-common-headerb',
  templateUrl: './common-headerb.component.html',
  styleUrls: ['./common-headerb.component.css']
})
export class CommonHeaderbComponent implements OnInit {
  @Input()
  title:any='';
  constructor(public location:Location) { }

  ngOnInit() {
  }

  btn_back():void{
    this.location.back();
  }

}
