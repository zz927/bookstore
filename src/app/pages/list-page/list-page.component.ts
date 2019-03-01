import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { CartPageComponent } from '../cart-page/cart-page.component';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  books:any=[]

  constructor(public bg:BookService) { }

  ngOnInit() {
    this.bg.getBookList().subscribe((res:any)=>{
      if(res.code==1){
        this.books=res.result;
      }
    })
  }


}
