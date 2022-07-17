import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { BaseApi } from '../core/base-api';

@Injectable()
export class UsersService extends BaseApi  {
  constructor(public override http: HttpClient) {
    super(http);
  }

  // getUserByEmail(email: string): Observable<any> {
  //   return this.http
  //     .get(`http://localhost:3000/users?email=${email}`)
  //     .pipe(map((user: any) => (user[0] ? user[0] : undefined)));
  // }

  getUserByEmail(email: string): Observable<any> {
    return this.get(`users?email=${email}`)
      .pipe(map((user: any) => (user[0] ? user[0] : undefined)));
  }

  // createNewUser(user: User): Observable<any> {
  //   return this.http.post('http://localhost:3000/users', user);
  // }

  createNewUser(user: User): Observable<any> {
    return this.post('users', user);
  }
}
