import { Component, OnInit } from '@angular/core';
import { Pet } from 'pet';
import { PetService } from 'pet.service';
import { User } from 'user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-petprofile',
  templateUrl: './petprofile.component.html',
  styleUrls: ['./petprofile.component.css']
})
export class PetprofileComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('User'));
  newPet = new Pet('Frank','Frank','Frank','Frank','Frank', this.user, '');
  petPre: number;
  submitted = false;
  petTotal: number;
  onSubmit() { this.submitted = true; }

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit() {
  }

  addPet(){
    console.log("in addPet")
    this.petPre = Number(this.newPet.type) + Number(this.newPet.age) + Number(this.newPet.size) + Number(this.newPet.condition);
    if(this.petPre < 6){
      this.petTotal = 0;
    }else if(this.petPre < 6 && this.petPre < 11){
      this.petTotal = 25;
    }else{
      this.petTotal = 50;
    }
    console.log("petTotal: ", this.petTotal);
    //this.newPet.owner = this.user.userID;
    console.log(this.newPet.owner);
    localStorage.setItem('petTotal', JSON.stringify(this.petTotal));
    localStorage.setItem('Pet', JSON.stringify(this.newPet));
    this.router.navigate(['/coverage']);
    //this.petService.add(this.newPet).subscribe(
    //  data => console.log('success', data),
    //  error => console.log('failed', error)
    //)
    console.log(this.newPet.owner);
    //console.log("pet subscribed")
    //this.router.navigate(['/home']);
  }


}
