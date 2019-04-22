import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'insurance.service';
import { Router } from '@angular/router';
import { Insurance } from 'insurance';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css']
})
export class CoverageComponent implements OnInit {
  pet = JSON.parse(localStorage.getItem('Pet'));
  petTotal = JSON.parse(localStorage.getItem('petTotal'));
  insurance = new Insurance(1, 1, 1);
  //coverage: number;
  constructor(private insuranceService: InsuranceService, private router: Router) { }

  ngOnInit() {
  }

  getMoney(){
    console.log("in getMoney")
    this.insurance.amount = Number(this.insurance.coverage) + Number(this.insurance.deductable) + this.petTotal;
    
    console.log("amount: ", this.insurance.amount);
    this.insurance.pet = this.pet; //need to fix
    console.log("Insurance object: ",this.insurance); 
    localStorage.setItem('Insurance', JSON.stringify(this.insurance));
    //localStorage.setItem('Pet', JSON.stringify(this.pet));
    this.insuranceService.add(this.insurance).subscribe(
      data => console.log('success', data),
      error => console.log('failed', error)
    )
    console.log(this.insurance);
    console.log("insurance subscribed")
    this.router.navigate(['/quote']);
  }
}
