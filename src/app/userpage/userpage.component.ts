import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('User'));
  pet = JSON.parse(localStorage.getItem('Pet'));
  
  constructor() { }

  ngOnInit() {
  }


}
