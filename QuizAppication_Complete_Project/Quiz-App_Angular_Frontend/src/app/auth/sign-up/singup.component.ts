import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
  export class SignUpComponent implements OnInit {
id:number=0;
    firstName: string='';
    lastName: string='';
    username : string = '';
    email :string='';
    password : string = '';
    contact: string='';
    token : string = '';
    role : string = 'user';

  user : User = new User(0,'','','','','','','','');
  constructor( private authService : AuthService, private route : Router) { }

  ngOnInit(): void {

this.id=0;
    this.firstName='';
    this.lastName='';
    this.username = '';
    this.email ='';
    this.password = '';
    this.contact='';
    this.token  = '';
    this.role= '';
  }

  signup() {

    this.user.username = this.username;
    this.user.password = this.password;
     this.user.role = this.role;
    this.user.contact=this.contact;
    this.user.email=this.email;
    
    this.authService.signUp(this.user).subscribe(res => {
      if(res == null) {
        alert("Registration failed");
        this.ngOnInit();
      }else {
        console.log("Registration successful");
        alert("Registration successful");
        this.route.navigate(['login']);
      }
    }, err => {
      alert("Registration failed.");
      this.ngOnInit();
    })

  }

  login(){
    this.route.navigate(['login']);

  }

}
