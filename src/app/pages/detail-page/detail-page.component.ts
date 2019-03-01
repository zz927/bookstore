import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
book:any={
  image:'',
  category:{
    name:''
  },
  publisher:{
    name:''
  }
}

  constructor(public location:Location,public activedRouter:ActivatedRoute, public bookservice:BookService) { 
    this.book.id=this.activedRouter.snapshot.params['id']
  }

  ngOnInit() {
    this.bookservice.getBookId(this.book.id).subscribe((res:any)=>{
      if(res.code==1){
        this.book=res.result;
      }
    })
  }

}
