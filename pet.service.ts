import { Injectable } from '@angular/core';
import { Pet } from 'pet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  APP_URL = 'http://localhost:8080/Furrtastic';

  constructor(private _http: HttpClient) { }

  add(pet: Pet){
    console.log(pet);
    return this._http.post<any>(this.APP_URL + '/pet.app', pet);
    //console.log(this._http.post<any>(this.APP_URL + '/signup.app', pet));
  }
}
