import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wfm-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss']
})
export class HistoryFilterComponent implements OnInit {

  @Output() onFilterCancel = new EventEmitter<any>();
  @Output() onFilterApply = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  closeFilter() {
    this.onFilterCancel.emit();
  }

}
