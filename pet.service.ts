import { Injectable } from '@angular/core';
import { Pet } from 'pet';
import { HttpClient } from '@angular/common/http';
import { User } from 'user';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  APP_URL = '18.216.185.182:8080/Furrtastic';

  constructor(private _http: HttpClient) { }

  add(pet: Pet){
    console.log(pet);
    return this._http.post<any>(this.APP_URL + '/pet.app', pet);
    //console.log(this._http.post<any>(this.APP_URL + '/signup.app', pet));
  }

  getThem(user: User){
    console.log(user);
    return this._http.post<any>(this.APP_URL + '/getpets.app', user);
  }
}
