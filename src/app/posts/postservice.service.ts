import { Injectable } from '@angular/core';
import {PostModel} from '../models/PostModel';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: PostModel[] = [];
  private postUpdate = new Subject<PostModel[]>();

  constructor() { }

  getPosts(): PostModel[]{
    return [...this.posts];
  }

  getPostUpdate(): Observable<PostModel[]>{
    return this.postUpdate.asObservable();
  }

  putPost(post: PostModel): void{
    this.posts.push(post);
    this.postUpdate.next([...this.posts]);
  }
}
