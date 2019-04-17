import { Component, OnInit } from '@angular/core';
import { Pet } from 'pet';
import { PetService } from 'pet.service';

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
    this.petService.add(this.newPet).subscribe(
      data => console.log('success', data),
      error => console.log('failed', error)
    )

    console.log("pet subscribed")
  }


}
