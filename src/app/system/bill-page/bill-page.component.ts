import { Component, OnInit } from '@angular/core';
import { BillService } from '../shared/services/bill.service';

@Component({
  selector: 'wfm-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit {

  constructor(private billService: BillService) { }

  ngOnInit(): void {
    this.billService.getCurrency();
    console.log('buvbu');
  }

}
