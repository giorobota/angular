import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { task } from './task-interface';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
@Injectable()
export class TaskComponent implements OnInit {
  [x: string]: any;
  tasksUrl = "https://jsonplaceholder.typicode.com/todos";
  tasks: task[] = [];
  
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
       //????
      this.getTasks(params['id']);
    });
    
  }
  
  getTasks(userId: number){
    this.http.get(this.tasksUrl).subscribe((result: task[])=>{
    
      this.tasks = result.filter(((x: { userId: number; }) => x.userId == userId));//????
      console.log(result);

      
    });
  }

  
}
