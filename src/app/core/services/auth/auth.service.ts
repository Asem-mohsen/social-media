import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangePassword, Login, Register } from '../../interfaces/auth';
import { environment } from '../../base/environment';
import { MyPlatfromService } from '../myPlatform/my-platfrom.service';
import { isPlatformBrowser } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token : any;

  constructor(private _http : HttpClient , private _MyPlatfromService : MyPlatfromService , @Inject(PLATFORM_ID) private platformId: Object)
  {

    if(this._MyPlatfromService.getPlatform()){

      this.token = {token : localStorage.getItem('token')}

    }

  }

  signUp(data : Register) : Observable<any>
  {
    return this._http.post(`${environment.baseURL}/users/signup` , data)
  }

  signIn(data : Login) : Observable<any>
  {
    return this._http.post(`${environment.baseURL}/users/signin` , data)
  }

  changePassword(data : ChangePassword) : Observable<any>
  {
    return this._http.patch(`${environment.baseURL}/users/change-password` , data)
  }

  getUserData() : Observable<any>
  {
    return this._http.get(`${environment.baseURL}/users/profile-data`)
  }

  saveToken(token: string): void {
    if(this._MyPlatfromService.getPlatform()){
      localStorage.setItem('token', token);
    }
  }

  getToken(): string | null {
    return isPlatformBrowser(this.platformId) ? localStorage.getItem('token') : null;
  }

  clearToken(): void {
    if (this._MyPlatfromService.getPlatform()) {
      localStorage.removeItem('token');
    }
  }

  decodeToken(): any {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error('Failed to decode token', error);
        return null;
      }
    }
    return null;
  }
}
