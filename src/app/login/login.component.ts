import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {UserServiceService} from '../services/user-service.service';
import { Router } from '@angular/router';
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
  constructor(private user:UserServiceService,private router:Router) { }

  ngOnInit() {
  }
  onLogin = function(){
    if(this.Login.valid)
    {
      var _this = this;
      this.user.Login(this.Login.value).subscribe(function(ret){
        if(ret.error ==undefined)
        {
          sessionStorage.user = JSON.stringify(ret);
          _this.router.navigate(['/Home']);
        }
        else
        {
          sessionStorage.clear();
          alert(ret.error);
        }
      });
    }
  }
}
