import { Injectable } from '@angular/core';
import { Insurance } from 'insurance';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  APP_URL = '18.216.185.182:8080/Furrtastic';

  constructor(private _http: HttpClient) { }

  add(insurance: Insurance){
    console.log(insurance);
    return this._http.post<any>(this.APP_URL + '/insurance.app', insurance);
  }
}
