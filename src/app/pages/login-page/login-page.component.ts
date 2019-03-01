import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user:any={
    phone:'',
    pwd:''
  }
  formModel:FormGroup
  txtpassword:FormControl
  txtphone:FormControl

  constructor(public router:Router) { 
    this.txtpassword=new FormControl('',[Validators.required,Validators.pattern(/^[\w]{6,12}$/)])
    this.txtphone=new FormControl('',[Validators.required,Validators.pattern(/^1[3578]\d{9}$/)])
    this.formModel=new FormGroup({
      password:this.txtpassword,
      phone:this.txtphone
    })
  }


  ngOnInit() {
  }

  btn_click():void{
    if(this.user.phone&&this.user.pwd){
      sessionStorage.setItem('Phone,Password',JSON.stringify(this.user))
      this.router.navigateByUrl(sessionStorage.getItem('Redirect'))
      sessionStorage.removeItem('Redirect')
    }
  }

}
