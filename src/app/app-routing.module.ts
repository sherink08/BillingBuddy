import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
