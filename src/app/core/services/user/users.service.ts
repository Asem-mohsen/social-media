import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../base/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http : HttpClient) { }

  uploadPhoto(photo : string) : Observable<any>
  {
    return this._http.put(`${environment.baseURL}/users/upload-photo` , photo)
  }
}
