import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  username: string;
  //APP_URL = 'http://localhost:3000/posts/';
  APP_URL = 'http:/localhost:8080/Furrtastic';
  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  getUser(gUsername: User){
    // this._http.get(this.APP_URL).subscribe(
    //   data => {
    //     this.user = data;
    //     console.log("Data: ",data);
    //     for(let user in this.user){
    //       //console.log(i);
    //       let theUser = this.user[user];
    //       let xUsername = theUser.username;
    //       let xFname = theUser.fname;
    //       console.log(theUser);
    //       //console.log("gUsername: ",gUsername);            
    //       if(xUsername === gUsername){
    //         console.log(xFname);
    //       }
            
    //     //   //}
    //      }
    //   },
    //   error => {
    //     console.log('Error occured', error);
    //   }
    // )
    this.user = gUsername;
    console.log(this.user);
    return this._http.get(this.APP_URL + '/login', this.user);
  }
}
