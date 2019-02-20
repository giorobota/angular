import { Component, OnInit } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { posts } from './posts';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  
  posts: posts;

  constructor(private http: HttpClient,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.posts= new posts(this.http, environment.postsUrl);
  }
  
}
