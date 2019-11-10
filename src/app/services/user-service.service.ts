import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseURL:string = environment.baseURl;
  constructor(private http:HttpClient) { }
  registerUser = function(userData)
  {
    var url = this.baseURL+"Register";
    return this.http.post(url,userData);
  }

}
