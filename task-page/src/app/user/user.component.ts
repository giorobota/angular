import { Component, OnInit } from '@angular/core';
import { user } from './user-interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';



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
  private router: Router;
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get(this.usersUrl).subscribe((result: user[])=>{
      this.users = result;
      console.log(result)
    });
  }
  goToTasks(userId: number){
    this.router.navigate(['/tasks', userId]);
  }

}
