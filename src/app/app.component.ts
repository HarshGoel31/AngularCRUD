import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnectingserviceService } from './connectingservice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  name: any;
  public logoutMsg: any;
  isUserLoggedIn = true;

  constructor(private router: Router) {
    this.name = sessionStorage.getItem("name");
    console.log("email in app.ts is ->" + this.name);
    if (this.name === null) {
      this.isUserLoggedIn = !this.isUserLoggedIn;
      console.log("in if of app.ts " + this.isUserLoggedIn);
    }
    else {
      this.isUserLoggedIn = this.isUserLoggedIn;
      console.log("in else of app.ts " + this.isUserLoggedIn);
    }
  }
  logout() {
    sessionStorage.removeItem("name");
    this.logoutMsg = "you have been logout successfully !!!";
    console.log(this.logoutMsg);
    this.isUserLoggedIn = !this.isUserLoggedIn;
    this.name = null;
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    console.log("in ngonit " + this.isUserLoggedIn);
  }
}