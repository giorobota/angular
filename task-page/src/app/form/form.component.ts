import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  postsUrl = "https://jsonplaceholder.typicode.com/posts";
  constructor() { }

  ngOnInit() {
  }

}
