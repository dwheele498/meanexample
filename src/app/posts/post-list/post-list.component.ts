import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      title: 'Hello',
      content: 'Yes'
    },
    {
      title: 'Hello',
      content: 'Yes'
    },
    {
      title: 'Hello',
      content: 'Yes'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
