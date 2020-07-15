import { Component, OnInit } from '@angular/core';
import { ConnectingserviceService } from '../connectingservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  allUsers: any = [];
  data: any;
  name: any;
  password: any;
  
  formdata: any;
  //constructor(private http: HttpClient) { }
  constructor(private ccs: ConnectingserviceService, private router: Router) { }
  ngOnInit() {
    console.log("ngoninit working");
    //this.http.get("http://localhost:3000/api/users/1").subscribe((data) => console.log(data));
    // 
    //   this.ccs.getUserById(2).subscribe((data)=>console.log(data));
  }
  updateUser() {
    console.log("it is in update user");
    this.ccs.updateUser(this.name,this.password).subscribe((data) => console.log(data));
  }
//   getAllUsers() {
//     this.ccs.getUser().subscribe((data) => {
//       this.allUsers = data;
//       console.log(data)
//     });
//   }
  deleteUser() {
    this.ccs.deleteRegistration(this.name).subscribe((data) => console.log(data));
    console.log("data deleted");
  }
  addUser() {
    
      this.ccs.addRegistration(this.name, this.password,).subscribe((data) => console.log(data));
      console.log("data added in table");
      // this.router.navigate(['/login']);
    
    
  }
//   getUserById() {
//     this.ccs.getUserById(2).subscribe((data) => console.log(data));
//   }
  onClickSubmit() {
    console.log(this.name, this.password);
  }
  cancel()
  {
    this.name="";
    this.password="";
    
  }
}
