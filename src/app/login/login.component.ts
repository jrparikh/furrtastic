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
  APP_URL = ' http://localhost:3000/posts/';
  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  getUser(gUsername: string){
    this._http.get(this.APP_URL).subscribe(
      data => {
        this.user = data;
        //console.log("Data: ",data);
        for(let i in this.user){
          //console.log(i);
          let x = this.user[i].username;
          //console.log(x);
          //console.log("gUsername: ",gUsername);            
          if(x === gUsername){
            console.log(gUsername);
          }else{
            console.log("WRONG");
          }
            
          //}
        }
      },
      error => {
        console.log('Error occured', error);
      }
    )
  }
}
