import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from '../services/room-service.service';

declare var $:JQueryStatic; // jquery 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private roomservice: RoomServiceService) { }

  ngOnInit() {

    let usr = JSON.parse(sessionStorage.user);
    const user = {
        name: usr.firstName +' '+ usr.lastName,
        email: usr.Email
    };

    this.roomservice.getRoomList(user).subscribe(function(ret){
      if(ret=="Success"){
        alert(ret);
      }
      else{
        alert(ret);
      }
    },
    function(err)
    {
      console.log(err);
      alert('Error occured , please try again later!');
    });
  }

}
