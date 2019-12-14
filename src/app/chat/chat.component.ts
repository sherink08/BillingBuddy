import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  type()
  {
    $('.chat-controls button').hide();
    $('.chat-controls span:first-child').show();
    $('.chat-controls').css( "grid-template-columns", "25px minmax(0, 1fr) 25px" );
  }
  hideType(){
    $('.chat-controls button').show();
    $('.chat-controls span:first-child').hide();
    $('.chat-controls').css( "grid-template-columns", "70px 90px minmax(0, 1fr) 25px" );
  }

}
