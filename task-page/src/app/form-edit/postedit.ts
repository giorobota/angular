import { EventEmitter, Output, Input } from '@angular/core';
import { post } from '../form/post';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { alert } from './alert';

export class postedit {
    
    
    constructor(private http: HttpClient, private route: ActivatedRoute,
        private router: Router){}
    
    getPost(id: number):post{
        this.http.get(environment.postsUrl + "?id="+id).subscribe((result: post[])=>{
            console.log(result);
            return result[0];
          });
        return null;
    }
    applyChanges(post: post, alert: alert){
        fetch(environment.postsUrl + "/" + post.id, {
          method: 'PUT',
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => response.json())
        .then(json => console.log(json));
        //alert update
        alert.setAlert("successfully updated", "alert-success");
        
    }
    deletePost(post:post, alert:alert){
        fetch(environment.postsUrl + "/" + post.id, {
          method: 'DELETE'
        });
        console.log(post);
        console.log("post deleted");
        //alert delete
        
        alert.setAlert("successfully deleted", "alert-success");
    }

    createPost(post:post, user:string, alert:alert){
    
        post.userId = this.getUserId(user);
        if(post.userId==0){
          //alert wrong username
          alert.setAlert("incorrect username", "alert-warning");
        }else{
          fetch(environment.postsUrl, {
            method: 'POST',
            body: JSON.stringify({
              title: post.title,
              body: post.body,
              userId:  post.userId
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => console.log(json))
          //alert create
          
          alert.setAlert("successfully created", "alert-success");
        }
        
      }
    
      getUserId(username:string):number {
        this.http.get(environment.usersUrl + "?username="+ username).subscribe((result: post[])=>{
          
          if(result.length > 0){
            console.log(result);
            return result[0].id;
          }
          
          
          
        });
        return 0;
      }


}
