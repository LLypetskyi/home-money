import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BaseApi } from 'src/app/shared/core/base-api';
import { Bill } from '../models/bill.model';

@Injectable({
  providedIn: 'root',
})
export class BillService extends BaseApi {
  constructor(public override http: HttpClient) { 
    super (http);
  }

  // getBill(): Observable<any> {
  //   return this.http.get('http://localhost:3000/bill');
  // }

  getBill(): Observable<any> {
    return this.get('bill');
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.put('bill', bill);
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
