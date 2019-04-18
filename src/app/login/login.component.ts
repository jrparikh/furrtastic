import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'user';
import { UserService } from 'user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser = new User('Frank','Frank','Frank','Frank','Frank','Frank','Frank','Frank','Frank');
  username: string;
  //APP_URL = 'http://localhost:3000/posts/';
  APP_URL = 'http://localhost:8080/Furrtastic/login.app';
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  userLogin(){
    console.log("in userLogin")
    this.userService.login(this.newUser).subscribe(
      data => localStorage.setItem('User', JSON.stringify(data)),
      error => console.log('failed', error)
    )
    console.log(JSON.parse(localStorage.getItem('User')));
    console.log("subscribed")
    this.router.navigate(['/petprofile']);
  }

  // getUser(gUsername: User){
  //   this._http.get(this.APP_URL).subscribe(
  //     data => {
  //       this.user = data;
  //       //console.log("Data: ",data);
  //       for(let user in this.user){
  //         //console.log(i);
  //         let theUser = this.user[user];
  //         let xUsername = theUser.username;
  //         let xFname = theUser.fname;
  //         //console.log(theUser);
  //         //console.log("gUsername: ",gUsername);            
  //         if(xUsername === gUsername){
  //           console.log(xFname);
  //         }
            
  //       //   //}
  //        }
  //     },
  //     error => {
  //       console.log('Error occured', error);
  //     }
  //   )
  // }

}
