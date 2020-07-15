import { Component, OnInit, Input, ElementRef,ViewChild } from '@angular/core';
import { ConnectingserviceService } from '../connectingservice.service';
import { FormGroup, FormControl,NgForm } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public static name1:any;
  isLoginMode = true;
  name: any;
  password: any;
  public static ssr: WindowSessionStorage;
  userArray: any;
  result:boolean=false;
  constructor(private ccs: ConnectingserviceService,private router:Router) {
    
    this.ccs.getUser().subscribe(res => {
      //  this.allUsers = data;
      console.log(res)
      this.userArray = res['response'];
    //   console.log(this.userArray);
     
    });
  
  }
  @ViewChild("data")loginForm:NgForm;
validate()
{
  console.log(this.loginForm);
  this.result=false;
  for(var ua of this.userArray)
  {
    this.result=true;
    console.log(ua.name+' '+ua.password);
    if((ua.name===this.name && ua.password===this.password))
    {
      this.result=true;
      console.log("welcome "+this.result); 
      LoginComponent.name1=this.name;
      sessionStorage.setItem("name", this.name);
      this.router.navigate(['/success']);
      return;
      //break;
    }
    else{
      this.result=false;
      this.router.navigate(['/fail']);
    } 
  }
}
  ngOnInit() {
    ///   this.getAllUsers();
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
