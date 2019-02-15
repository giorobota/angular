import { Component, OnInit } from '@angular/core';
import { user } from './user-interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
@Injectable()
export class UserComponent implements OnInit {
  usersUrl = "https://jsonplaceholder.typicode.com/users";
  users: user[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get(this.usersUrl).subscribe((result: user[])=>{
      this.users = result;
      console.log(result)
    });
  }

}
