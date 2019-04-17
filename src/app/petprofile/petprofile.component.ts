import { Component, OnInit } from '@angular/core';
import { Pet } from 'pet';
import { PetService } from 'pet.service';
import { User } from 'user';

@Component({
  selector: 'app-petprofile',
  templateUrl: './petprofile.component.html',
  styleUrls: ['./petprofile.component.css']
})
export class PetprofileComponent implements OnInit {
  owner = localStorage.getItem('User');
  newPet = new Pet('Frank','Frank','Frank','Frank','Frank', this.owner, 'Insurance');
  constructor(private petService: PetService) { }

  ngOnInit() {
  }

  addPet(){
    console.log("in addPet")
    this.newPet.user = this.owner;
    console.log(this.newPet.user);
    this.petService.add(this.newPet).subscribe(
      data => console.log('success', data),
      error => console.log('failed', error)
    )
    console.log(this.newPet.user);
    console.log("pet subscribed")
  }


}
