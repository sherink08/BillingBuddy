import { Injectable } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpInterceptor} from '@angular/common/http';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req,next)
  {
    if(!sessionStorage.user)
      return next.handle(req);
    var tokenizedReq = req.clone({
      setHeaders:{
        Authorization: JSON.parse(sessionStorage.user).Token
      }
    });
    return next.handle(tokenizedReq);
  }
}
