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

  constructor() { }

  ngOnInit(): void {
   
  }
  
}
