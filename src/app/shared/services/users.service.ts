import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

 getUserByEmail(email: string): Observable<any> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      .pipe(map((user: any) => user[0] ? user[0] : undefined));
  }


}