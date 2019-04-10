import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input()
  fname: string;
  lname: string;
  email: string;
  phoneNum: string;
  address: string;
  state: string;
  city: string;
  zipCode: string;
  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

}
