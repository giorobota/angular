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
  
  deleteScuccessMessage = false;
  updateSuccessMessage = false;
  wrongUrlMessage = false;
  postsUrl = "https://jsonplaceholder.typicode.com/posts";
  post: form =  {
    "userId": 0,
    "id": 0,
    "title": "",
    "body": ""
  };


 
  ngOnInit() {
    this.route.params.subscribe(params => {
      var val = params['id'];
      var isnum = /^\d+$/.test(val);
      if(isnum){
        this.getPost(val);
      }else{
        //alert wrong url
        this.wrongUrlMessage = true;
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
    this.updateSuccessMessage = true;
  }
  deletePost(){
    fetch(this.postsUrl + "/" + this.post.id, {
      method: 'DELETE'
    });
    console.log("post deleted");
    //alert delete
    this.deleteScuccessMessage = true;
  }

  
  

}
