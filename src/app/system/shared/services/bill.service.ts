import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Bill } from '../models/bill.model';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  constructor(private http: HttpClient) { }

  getBill(): Observable<any> {
    return this.http.get('http://localhost:3000/bill');
  }

  getCurrency(base: string = 'USD'): Observable<any> {
    console.log('buvbu getCurrency ');
    let headers = new HttpHeaders();
    headers = headers.set('apikey', 'zgYlIOIgWkizTfEJBFfIxWC3HqXwtZKC');

    console.log('getCurrency httpOptions ', { headers: headers });
    return this.http.get(`https://api.apilayer.com/fixer/latest?base=${base}`, { headers: headers });
  }
}
