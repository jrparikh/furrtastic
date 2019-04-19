import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'pet';

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

  buyInsurance(pet: Pet){
      console.log(pet.name);
      localStorage.setItem('Pet', JSON.stringify(this.pet));
      this.router.navigate(['/coverage']);
  }
}
