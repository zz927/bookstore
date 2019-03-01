import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  state:boolean=true;
  isExit:boolean=false;
  currentbook:any={

  }
  book:any={
    image:'',
    category:{
      name:''
    },
    publisher:{
      name:''
    }
  }


  constructor() { }

  ngOnInit() {
  }

 

}
