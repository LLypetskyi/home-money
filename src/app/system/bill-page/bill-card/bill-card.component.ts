import { Component, Input, OnInit } from '@angular/core';
import { Bill } from '../../shared/models/bill.model';
import { BillService } from '../../shared/services/bill.service';

@Component({
  selector: 'wfm-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill!: Bill;
  @Input() currency: any;

  dolar!: number;
  euro!: number;

  constructor() { }

  ngOnInit(): void {
    const {rates} = this.currency;
    this.dolar = rates['USD'] * this.bill.value;
    this.euro = rates['EUR'] * this.bill.value;
   
  }
  
}
