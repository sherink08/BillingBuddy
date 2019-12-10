import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomServiceService } from '../services/room-service.service';
import { User } from '../Modals/user';
import { Room } from '../Modals/room';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  constructor(private RoomService:RoomServiceService,private router:Router) { }

  roomForm = new FormGroup({
    roomname : new FormControl('',Validators.required)
  })

  user : User[] = []; 
  room : Room[] = [];

  ngOnInit() {
  }

  createRoom(){
/*    let usr = JSON.parse(sessionStorage.user);
    this.user.name = usr.firstName +' '+ usr.lastName;    
    this.user.email = usr.Email;
    this.user.phone = usr.phoneNumber;
  */  
    if(this.roomForm.valid) 
    {
      var _this  =this;
      
      /*
      _this.room.roomName = this.roomForm.value.roomname;
      _this.room.users = _this.user;
      */
      let usr = JSON.parse(sessionStorage.user);
      const room = {
        roomName:this.roomForm.value.roomname,
        users: [{
          name: usr.firstName +' '+ usr.lastName,
          email: usr.Email,
          phone: usr.phoneNumber,
          isadmin: true
        }]
      };

      this.RoomService.createRoom(room).subscribe(function(ret){
        if(ret=="Success"){
          alert("Room created successfully , It will be available in your home");
          _this.router.navigate(['/Home']);
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
}
