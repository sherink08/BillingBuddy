import { Component, OnInit} from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.css']
})
export class ChatDetailsComponent implements OnInit {

  users: any;
  
  constructor(private user:UserServiceService) {
    this.user.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  ngOnInit(){

  }
  
  addMember(){

  }

}
