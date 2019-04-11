import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  APP_URL = 'http://localhost:8080/signup.app';

  constructor(private _http: HttpClient) { }

  getUsers(value: string, value2: string, value3: string, value4: string, value5: string, value6: string, value7: string, value8: string, value9: string, value10: string): Observable<User>{
    this.user = new User(value, value2, value3, value4, value5, value6, value7, value8, value9, value10);
    console.log(this.user);
    return of(this.user);
  }

  addUser (sUser: User): Observable<User> {
    return this._http.post<User>(this.APP_URL, sUser).pipe();
  }
}
