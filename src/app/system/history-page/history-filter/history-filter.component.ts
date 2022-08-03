import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'wfm-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss'],
})
export class HistoryFilterComponent implements OnInit {
  @Output() onFilterCancel = new EventEmitter<any>();
  @Output() onFilterApply = new EventEmitter<any>();

  @Input() categories: Category[] = [];

  selectedPeriod = 'd';
  selectedTypes: any[] = [];
  selectedCategories: any[] = [];

  timePeriods = [
    { type: 'd', label: 'День' },
    { type: 'w', label: 'Тиждень' },
    { type: 'M', label: 'Місяць' },
  ];

  types = [
    { type: 'income', label: 'Дохід' },
    { type: 'outcome', label: 'Витрати' },
  ];

  constructor() { }

  ngOnInit(): void { }

  closeFilter() {
    this.onFilterCancel.emit();
  }

  // target has 2 fields - checked & value
  // hendleChangeType({ checked, value }) {
  //   if (checked) {
  //     this.selectedTypes.indexOf(value) != -1 ? this.selectedTypes.push(value) : null;
  //   } else {
  //     this.selectedTypes = this.selectedTypes.filter(i => i !== value);
  //   }
  // }

  // hendleChangeType(target: any) {
  //   if (target.checked) {
  //     this.selectedTypes.indexOf(target.value) != -1 ? this.selectedTypes.push(target.value) : null;
  //   } else {
  //     this.selectedTypes = this.selectedTypes.filter(i => i !== target.value);
  //   }
  // }

  // hendleCangeCategory(target: any) {
  //   if (target.checked) {
  //     this.selectedCategories.indexOf(target.value) != -1 ? this.selectedCategories.push(target.value) : null;
  //   } else {
  //     this.selectedCategories = this.selectedCategories.filter(i => i !== target.value);
  //   }
  // }


  // Метод який обєднує логіку hendleChangeType та hendleCangeCategory
  
  private calculateInputParams(field: string, checked: boolean, value: string) {
    if (checked) {
      this[field].indexOf(value) != -1 ? this[field].push(value) : null;
    } else {
      this[field] = this[field].filter(i => i !== value);
    }
  }

  hendleChangeType({ checked, value }) {
    this.calculateInputParams('selectedTypes', checked, value);
  }

  hendleCangeCategory({ checked, value }) {
    this.calculateInputParams('selectedCategories', checked, value);
  }


}
