import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RoomServiceService {
  
  baseURL:string = environment.baseURl;
  constructor(private http:HttpClient) { }
  
  createRoom(roomData,userData)
  {
    var url = this.baseURL+"createRoom";
    return this.http.post(url,roomData);
  }

  getRoomList(user){
    var url = this.baseURL+"getRoomList";
    return this.http.post(url,user);
  }

  isLoggedIn()
  {
    return !!sessionStorage.user;
  }

}
