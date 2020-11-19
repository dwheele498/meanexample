import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PostModel } from '../../models/PostModel';
import { PostService } from '../postservice.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: PostModel[] = [];
  private postsSub: Subscription;

  constructor(public ps: PostService) {}
  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

  ngOnInit(): void {
    this.ps.getPosts();
    this.postsSub = this.ps.getPostUpdate().subscribe((post: PostModel[]) => {
      this.posts = post;
    });
  }
}
