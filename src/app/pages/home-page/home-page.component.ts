import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  sections:any=[]

  constructor(public sectionservice:SectionService) { }

  ngOnInit() {
    this.sectionservice.getSectionList().subscribe((res:any)=>{
      if(res.code==1){
        this.sections=res.result;
      }
    })
  }



}
