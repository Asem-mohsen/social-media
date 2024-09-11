import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentsService } from '../../../services/comment/comments.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-comment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-comment.component.html',
  styleUrl: './create-comment.component.css'
})
export class CreateCommentComponent {

  @Input() postId : string = ''

  commentForm !: FormGroup

  constructor(private commentService : CommentsService ,  private toastr: ToastrService){}

  ngOnChanges(): void {

    this.commentForm = new FormGroup({
      content : new FormControl(null , [Validators.required]),
      post : new FormControl(this.postId)
    })

  }

  sendComment()
  {
    this.commentService.createComment(this.commentForm.value).subscribe({
      next : (res)=>{
        this.toastr.success('Comment Added Successfully')
        this.commentForm.get('content')?.setValue(null)
      }
    })
  }

}
