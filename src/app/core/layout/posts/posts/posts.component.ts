import { DatePipe } from '@angular/common';
import { Post } from '../../../interfaces/post';
import { PostsService } from './../../../services/post/posts.service';
import { Component } from '@angular/core';
import { PostCommentsComponent } from "../post-comments/post-comments.component";
import { CreateCommentComponent } from "../create-comment/create-comment.component";
import { CreatePostComponent } from "../create-post/create-post.component";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [DatePipe, PostCommentsComponent, CreateCommentComponent, CreatePostComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  posts : Post[] = []
  constructor(private _PostsService : PostsService ){}

  ngOnInit(): void {

    this._PostsService.getAllPosts(1).subscribe({
      next : (res)=>{
        this.posts = res.posts
      }
    })

  }


}
