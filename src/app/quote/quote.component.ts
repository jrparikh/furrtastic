import { Component, OnInit } from '@angular/core';
import { PetService } from 'pet.service';
import { InsuranceService } from 'insurance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  pet = JSON.parse(localStorage.getItem('Pet'));
  insurance = JSON.parse(localStorage.getItem('Insurance'));
  
  constructor(private petService: PetService, private insuranceService: InsuranceService, private router: Router) { }

  ngOnInit() {
  }

  getTotal(){
    this.petService.add(this.pet).subscribe(
      data => console.log('success', data),
      error => console.log('failed', error)
    )
    this.insuranceService.add(this.insurance).subscribe(
      data => console.log('success', data),
      error => console.log('failed', error)
    )
    this.router.navigate(['/signup']);
  }

}
