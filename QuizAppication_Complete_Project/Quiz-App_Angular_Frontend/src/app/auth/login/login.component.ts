import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email : string = '';
  password : string = '';
  role : string = '';

  user : User = new User(0,'','','','','','','','');

  roles : string[];

  constructor(private authService : AuthService, private route : Router ) { 
    this.roles = [
      'admin',
      'user'
    ]
  }

  ngOnInit(): void {
    this.email = '';
    this.password = '';
    this.role='';
  }

  login() {
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.role = this.role;

    this.authService.login(this.user).subscribe(res => {

      if(res == null) {
        alert("Username or password is Empty");
        this.ngOnInit();
      }else {
        console.log("Login successful");
        localStorage.setItem("token",res.token);

        if(this.role == 'user') {
          this.route.navigate(['/user-dashboard']);
        } 

        if( this.role == 'admin') {
          this.route.navigate(['/admin-dashboard']);
        }

      }

    }, err => {
      alert("Login failed!!");
      this.ngOnInit();
    })

  }
}
