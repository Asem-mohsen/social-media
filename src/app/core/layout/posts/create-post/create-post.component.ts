import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from '../../../services/post/posts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule , FormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

  selectedFile : File | null = null
  postContent : string = ''

  constructor(private _PostsService : PostsService , private toastr: ToastrService){}

  detect(event : Event)
  {
    let input = event.target as HTMLInputElement

    if(input.files && input.files.length > 0){
      this.selectedFile = input.files[0];
    }
  }

  sendData()
  {
    let formData = new FormData()

    if(this.selectedFile){

      formData.append('image', this.selectedFile)

      formData.append('body' , this.postContent)

      this._PostsService.createPost(formData).subscribe({
        next : (res)=>{
          this.toastr.success('Post Created Successfully')
        }
      })
    }
  }
}
