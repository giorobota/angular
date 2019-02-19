import { Component, OnInit, Injectable, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router} from '@angular/router';
import { form } from '../form/form-interface';




@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router) { }
  

  postsUrl = "https://jsonplaceholder.typicode.com/posts";
  usersUrl = "https://jsonplaceholder.typicode.com/users";
  post: form =  {
    "userId": 0,
    "id": 0,
    "title": "",
    "body": ""
  };
  postingUser: string = "";


 
  ngOnInit() {
    this.route.params.subscribe(params => {
      var val = params['id'];
      var isnum = /^\d+$/.test(val);
      
      if(isnum){
 
          if(val !=0)this.getPost(val);
        
      }else{
        //alert wrong url
        this.router.navigate(['/posts',"wrongUrl"]);
      }
      
    });
    console.log(window.location.href);
  }
  getPost(id: number){
    
    this.http.get(this.postsUrl + "?id="+id).subscribe((result: form[])=>{
    
      this.post = result[0];
      console.log(result);
    });
  }
  
  applyChanges(){
    fetch(this.postsUrl + "/" + this.post.id, {
      method: 'PUT',
      body: JSON.stringify({
        id: this.post.id,
        title: this.post.title,
        body: this.post.body,
        userId: this.post.userId
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json));
    //alert update
    
    this.router.navigate(['/posts',"update"]);
  }
  deletePost(){
    fetch(this.postsUrl + "/" + this.post.id, {
      method: 'DELETE'
    });
    console.log("post deleted");
    //alert delete
    
    this.router.navigate(['/posts', "delete"]);
  }

  createPost(){
    
    this.getUserId();
    if(this.post.userId==0){
      //alert wrong username
      this.router.navigate(['/posts', 'wrongUser']);
    }else{
      fetch(this.postsUrl, {
        method: 'POST',
        body: JSON.stringify({
          title: this.post.title,
          body: this.post.body,
          userId:  this.post.userId
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
      //alert create
      this.router.navigate(['/posts', 'create']);
    }
    
  }

  getUserId() {
    this.http.get(this.usersUrl + "?username="+ this.postingUser).subscribe((result: form[])=>{
      
      if(result.length > 0){
        this.post.userId = result[0].id;
      }
      
      console.log(result);
    });
  }

}
