import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('User'));

  petArr = JSON.parse(localStorage.getItem('petArr'));
  
  constructor() { }

  ngOnInit() {
    console.log("petArr: ", this.petArr);
    console.log("petArr[0]: ", this.petArr[0]);
  }


}
