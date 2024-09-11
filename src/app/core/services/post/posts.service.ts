import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../base/environment';
import { CreatePost, Post } from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http : HttpClient) { }

  createPost(data : any) : Observable<any>
  {
    return this._http.post(`${environment.baseURL}/posts` , data)
  }

  getAllPosts(pageNumber : number) : Observable<any>
  {
    return this._http.get(`${environment.baseURL}/posts?page=${pageNumber}`)
  }

  getMyPosts() : Observable<any>
  {
    return this._http.get(`${environment.baseURL}/users/ /posts`)
  }

  getSinglePost(postId : string) : Observable<any>
  {
    return this._http.get(`${environment.baseURL}/posts/${postId}`)
  }

  updatePost(postId : string , data : Post) : Observable<any>
  {
    return this._http.put(`${environment.baseURL}/posts/${postId}` , data)
  }

  deletePost(postId : string) : Observable<any>
  {
    return this._http.delete(`${environment.baseURL}/posts/${postId}`)
  }

}
