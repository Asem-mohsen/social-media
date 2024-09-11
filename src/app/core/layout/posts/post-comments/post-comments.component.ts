import { Component, Input } from '@angular/core';
import { CommentsService } from '../../../services/comment/comments.service';
import { Comment } from '../../../interfaces/comment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-comments',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.css'
})
export class PostCommentsComponent {

  @Input() postId : string = ''

  allComments : Comment[]  = []

  constructor(private _commentService : CommentsService){}

  ngOnChanges(): void {
    this._commentService.getComments(this.postId).subscribe({
      next : (res) => {
        this.allComments = res.comments
      }
    })
  }

}
