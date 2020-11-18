import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import {PostModel} from '../../models/PostModel';
import {PostService} from '../postservice.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  enteredContent = '';
  enteredTitle = '';

  constructor(public ps: PostService) {}

  ngOnInit(): void {}
  onSavePost(form: NgForm): void {
    const post = {} as PostModel;
    post.title = form.value.title;
    post.content = form.value.content;
    this.ps.putPost(post);
    form.resetForm();
  }
}
