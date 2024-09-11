import { Inject, inject } from '@angular/core';
import { MyPlatfromService } from './../services/myPlatform/my-platfrom.service';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const _AuthService: AuthService = inject(AuthService);

  const token = _AuthService.getToken();

  if(token){
    req = req.clone({
      setHeaders  : {
        'token' : token
      },
    })
  }


  return next(req);
};
