import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { task } from './task-interface';
import { ActivatedRoute, } from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
@Injectable()
export class TaskComponent implements OnInit {
  
  tasksUrl = "https://jsonplaceholder.typicode.com/todos";
  tasks: task[] = [];
  
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      var val = params['id'];
      var isnum = /^\d+$/.test(val);
      if(isnum){
        this.getTasks(val);
      }else{
        //alert wrong url
      }
     
      
    });
    
  }
  
  getTasks(userId: number){
    this.http.get(this.tasksUrl + "?userId="+userId).subscribe((result: task[])=>{
    
      this.tasks = result;
      console.log(result);

      
    });
  }

  
}
