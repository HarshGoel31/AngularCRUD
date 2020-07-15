import { Component, OnInit } from '@angular/core';
import { ConnectingserviceService } from '../connectingservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  allUsers: any = [];
  flag = false;
  toggleText: any = 'Show Users';
  updateUserDiv = false;
  constructor(private ccs: ConnectingserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  updateUser(name:string,password:string) {
    this.updateUserDiv = true;
    this.flag = !this.flag;
    console.log("it is in update user");
    this.allUsers = this.getUserByNamePassword(name,password);

  }
  submit(name, password) {
    this.ccs.updateUser(name, password).subscribe((data) => console.log(data));
    location.reload();
  }
  getAllUsers() {
    this.updateUserDiv = false;
    this.flag = !this.flag;
    this.toggleText = !this.flag ? 'Show Users' : 'Hide Users';
    this.ccs.getUser().subscribe((data) => {
      this.allUsers = data['response'];
      //this.userArray = res['response'];
      console.log(data)
    });
  }

  deleteUser(name: string) {
    this.ccs.deleteRegistration(name).subscribe((data) => console.log(data));
    location.reload();
    //this.flag=!this.flag;
    // deleteUser() {
    //     this.ccs.deleteRegistration(this.name).subscribe((data) => console.log(data));
    //     console.log("data deleted");
    //   }
  }
  getUserByNamePassword(name:string,password:string) {
    this.ccs.getUserByName(name,password).subscribe((data) => {
      this.allUsers = data['response'];
      console.log(data);
      return this.allUsers;
    });
  }
  addUser() {
    this.router.navigate(['/adminreg']);
  }
}
