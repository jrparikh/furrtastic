import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('User'));

  petArr = JSON.parse(localStorage.getItem('petArr'));
  pet;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log("petArr: ", this.petArr);
    console.log("petArr[0]: ", this.petArr[0]);
  }

  buyInsurance(pet: any){
      console.log(pet.name);
      this.router.navigate(['/coverage']);
  }
}
