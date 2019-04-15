import { Component, OnInit, Input } from '@angular/core';
import { User } from 'user';
import { UserService } from 'user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { error } from 'util';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  user: User;
  newUser = new User();
  //APP_URL = 'http://localhost:4200/signup';
  //APP_URL = ' http://localhost:3000/posts/';
  APP_URL = 'http://localhost:8080/Furrtastic';
  handleError: any;

  constructor(private userService: UserService, private _http: HttpClient) { }
  
  // add(sUser: User): void{
  //   const newUser: User = Object.assign({}, this.user);
  //   this.userService.addUser(sUser).subscribe(
  //     (data: User) => {
  //       console.log(data);
  //     },
  //     (error: any) => console.log(error)
  //   );
  // }
  

  getUser(value: string, value2: string, value3: string, value4: string, value5: string, value6: string, value7: string, value8: string, value9: string, value10: string): void {
    this.userService.getUsers(value, value2, value3, value4, value5, value6, value7, value8, value9, value10).subscribe(
      (data: User) => {
        console.log("data: " + data);
      },
      (error: any) => console.log("error: " + error)
    );
  }
//value: string, value2: string, value3: string, value4: string, value5: string, value6: string, value7: string, value8: string, value9: string, value10: string
  setUsers(value: string, value2: string, value3: string, value4: string, value5: string, value6: string, value7: string, value8: string, value9: string, value10: string){
    // this.newUser = theUser;
    // console.log("please work: " + this.newUser);
    // return this._http.post(this.APP_URL + '/signup', this.newUser)
    //   .subscribe(
    //     data => {
    //       console.log(data);
    //     }
    //   );
    this.user = new User(value, value2, value3, value4, value5, value6, value7, value8, value9, value10);
    const req = this._http.post(this.APP_URL, {
      fname: this.user.fname,
      lname: this.user.lname,
      email: this.user.email,
      phoneNum: this.user.phoneNum,
      address: this.user.address,
      state: this.user.state,
      city: this.user.city,
      zipCode: this.user.zipCode,
      username: this.user.username,
      password: this.user.password,
      })
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        );
  }
  // onEnter(value: string, value2: string, value3: string, value4: string, value5: string, value6: string, value7: string, value8: string, value9: string, value10: string) {
  //   // this.user.fname= value;
  //   // this.user.lname= value2;
  //   // this.user.email= value3;
  //   // this.user.phoneNum= value4;
  //   // this.user.address= value5;
  //   // this.user.state= value6;
  //   // this.user.city= value7;
  //   // this.user.zipCode= value8;
  //   // this.user.username= value9;
  //   // this.user.password= value10;
  //   this.user = new User(value, value2, value3, value4, value5, value6, value7, value8, value9, value10);
  //   console.log(this.user);
  //   // console.log(this.user.fname);
  //   // console.log(this.user.lname);
  //   // console.log(this.user.email);
  //   // console.log(this.user.phoneNum);
  //   // console.log(this.user.address);
  //   // console.log(this.user.state);
  //   // console.log(this.user.city);
  //   // console.log(this.user.zipCode);
  //   // console.log(this.user.username);
  //   // console.log(this.user.password);
  // }
}
