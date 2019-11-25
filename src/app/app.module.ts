import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';
import { HttpInterceptorService } from './services/http-interceptor.service';
import * as $ from 'jquery';
import * as bootstrap from "bootstrap";
import { HeaderComponent } from './header/header.component';
import { ChatComponent } from './chat/chat.component';
import { RoomprogresschartComponent } from './roomprogresschart/roomprogresschart.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatDetailsComponent } from './chat-details/chat-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    ChatComponent,
    RoomprogresschartComponent,
    ChatHeaderComponent,
    ChatDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
