import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from 'pet.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('User'));

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit() {
  }

  thePets(){
    this.petService.getThem(this.user.userID).subscribe(
      data => console.log('success', data),
      error => console.log('failed', error)
    )
  this.router.navigate(['/userpage']);
  }
}
