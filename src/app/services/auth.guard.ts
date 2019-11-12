import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _user:UserServiceService,private _router:Router){}
  canActivate():boolean {
    if(this._user.isLoggedIn())
    {
      return true;
    }
    else
    {
      this._router.navigate(['/Login']);
      return false;
    }
  }
  
}
