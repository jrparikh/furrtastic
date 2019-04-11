import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor() { }

  getUsers(value: string, value2: string, value3: string, value4: string, value5: string, value6: string, value7: string, value8: string, value9: string, value10: string): Observable<User>{
    this.user = new User(value, value2, value3, value4, value5, value6, value7, value8, value9, value10);
    console.log(this.user);
    return of(this.user);
  }
}
