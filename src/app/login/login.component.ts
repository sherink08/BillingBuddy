import { Component, OnInit } from '@angular/core';
import {FormsModule,FormGroup,FormControl,Validator, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login = new FormGroup({
    Email:new FormControl('',Validators.required),
    Password:new FormControl('',Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }
  onLogin = function(){
  }
}
