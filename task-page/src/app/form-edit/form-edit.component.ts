import { Component, OnInit, Injectable, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router} from '@angular/router';
import { post } from '../form/post';
import { environment } from 'src/environments/environment';
import { alert } from './alert';
import { postedit } from './postedit';





@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router) { }
  
  postServices:postedit;
  
  post: post =  {
    "userId": 0,
    "id": 0,
    "title": "",
    "body": ""
  };

  postingUser: string = "";
  
  alert: alert;
 
  ngOnInit() {
    this.alert = new alert();
    this.postServices = new postedit(this.http, this.route, this.router);
    this.route.params.subscribe(params => {
      var val = params['id'];
      var isnum = /^\d+$/.test(val);
      
      if(isnum){
 
          if(val !=0)this.getPost(val);
        
      }else{
          this.alert.setAlert("incorrect url", "alert-warning");
      }
      
    });
    console.log(window.location.href);
  }
  getPost(id: number){
    
    this.http.get(environment.postsUrl + "?id="+id).subscribe((result: post[])=>{
    
      this.post = result[0];
      console.log(result);
    });
  }
  
  

}
