import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../base/environment';
import { Comment } from '../../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _http : HttpClient) { }

  createComment(data : Comment) : Observable<any>
  {
    return this._http.post(`${environment.baseURL}/comments` , data)
  }

  getComments(postId : string) : Observable<any>
  {
    return this._http.get(`${environment.baseURL}/posts/${postId}/comments`)
  }

  updateComments(postId : string , data : Comment) : Observable<any>
  {
    return this._http.put(`${environment.baseURL}/posts/${postId}/comments` , data)
  }
}
