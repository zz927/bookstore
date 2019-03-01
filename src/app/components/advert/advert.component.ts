import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {

  adverts:any[]=[]
  constructor(public sectionservice:SectionService) { }

  ngOnInit() {
    this.sectionservice.getAdverList().subscribe((res:any)=>{
      if(res.Code==100){
        this.adverts=res.Data;
        console.log(res)
      }
    })
  }

}
