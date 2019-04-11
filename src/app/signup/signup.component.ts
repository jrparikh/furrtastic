import { Component, OnInit, Input } from '@angular/core';
import { User } from 'user';
import { UserService } from 'user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  user: User;

  constructor(private userService: UserService) { }
  
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
