import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  errMsg : string = "";
  username : string="";
  password : string = "";

 ngOnInit(): void {
   
 }

   constructor (
    private loginService : AuthService,
    private router: Router) {

   }


login () {
  if (this.username.trim().length === 0) {
      this.errMsg = "username is required"
  } else if (this.password.trim().length === 0) {
    this.errMsg = "password is required"
  } else {
    this.errMsg= "";
    let res = this.loginService.login(this.username,this.password);
    if (res === 200) {
     this.router.navigate(['home'])
    }
    if(res === 304) {
      this.errMsg= "ERROR ";
    }
}

}
}
