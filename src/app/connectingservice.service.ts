import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectingserviceService {
 
  //uri="http://127.0.0.1:8000/";
  uri = "http://localhost:5000/api/register";
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<any>(`${this.uri}`);
  }

  getUserByName(name,password) {
    return this.http.get(`${this.uri}/${name}`);
  }
  addRegistration(name, password) {
    const issue = {
      name: name,
      password: password
        };
        console.log("Add registration in service");
    return this.http.post(`${this.uri}`, issue);
  }

  updateUser( name,password) {
    const issue = {
      name: name,
      password: password
    };
    return this.http.put(`${this.uri}/${name}`, issue);
    // 
  }
  

  deleteRegistration(name) {
    console.log("data ")
    return this.http.delete(`${this.uri}/${name}`);
  }
}