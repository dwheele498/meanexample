import { Injectable } from '@angular/core';
import { PostModel } from '../models/PostModel';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: PostModel[] = [];
  private postUpdate = new Subject<PostModel[]>();

  constructor(private http: HttpClient) {}

  getPosts(): void {
    this.http.get<PostModel[]>('http://localhost:3000/api/posts').subscribe(
      (postData) => {
        this.posts = postData;
        console.log(this.posts);
        this.postUpdate.next([...this.posts]);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getPostUpdate(): Observable<PostModel[]> {
    return this.postUpdate.asObservable();
  }

  putPost(post: PostModel): void {
    post.id = null;
    this.http
      .post<{ message: string }>('http://localhost:3000/api/posts', post)
      .subscribe((res) => {
        console.log(res.message);
        this.posts.push(post);
        this.postUpdate.next([...this.posts]);
      });
  }
}
