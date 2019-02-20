import { post } from './post';
import { HttpClient } from '@angular/common/http';

export class posts{
    "list": post[];
    
    
    constructor(private http: HttpClient, url:string){
        this.getPosts(url);
    }
    getPosts(url:string){
        this.http.get(url).subscribe((result: post[])=>{
          this.list = result;
          console.log(result);
        });
    }
}