import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {UserServiceService} from '../services/user-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  UserRegister = new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    Email:new FormControl('',Validators.required),
    phoneNumber:new FormControl('',Validators.required)
  })
  constructor(private user:UserServiceService,private router:Router) { }

  ngOnInit() {
  }
  Register()
  {
    debugger;
    if(this.UserRegister.valid)
    {
      var _this  =this;
      console.log(this.UserRegister.value);
      this.user.registerUser(this.UserRegister.value).subscribe(function(ret){
        if(ret=="Success"){
          console.log("Success");
          debugger;
          alert("Registerd successfully , Login to continue");
          _this.router.navigate(['/Login']);
        }
        else{
          console.log(ret);
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