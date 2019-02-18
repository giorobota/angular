import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { form } from './form-interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  postsUrl = "https://jsonplaceholder.typicode.com/posts";
  
  posts: form[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts(){
    this.http.get(this.postsUrl).subscribe((result: form[])=>{
      this.posts = result;
      console.log(result);
    });
  }
}
