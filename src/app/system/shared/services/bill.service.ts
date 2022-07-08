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

  getCurrency(base: string = 'UAH'): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'apiKey': 'zgYlIOIgWkizTfEJBFfIxWC3HqXwtZKC'
      })
    };
    return this.http.get(`https://api.apilayer.com/fixer/latest?base=${base}`, httpOptions);
  }
}
