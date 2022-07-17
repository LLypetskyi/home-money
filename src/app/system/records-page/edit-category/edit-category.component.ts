import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Message } from 'src/app/shared/models/message.model';
import { Category } from '../../shared/models/category.model';
import { CategoriesService } from '../../shared/services/categories.service';

@Component({
  selector: 'wfm-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Output() onCategoryEdit = new EventEmitter<Category>();

  currentCategoryId = 1;
  currentCategory!: Category;
  message!: Message;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.message = new Message('success', '');
    this.onCategoryChange();
  }
  onCategoryChange() {
    this.currentCategory = this.categories
      .find(c => c.id === +this.currentCategoryId)!;
  }

  onSubmit(form: NgForm) {
    let { capacity, name } = form.value;
    if (capacity < 0) capacity *= -1;

    const category = new Category(name, capacity, +this.currentCategoryId);

    this.categoriesService.updatetCategories(category)
      .subscribe((categoty: Category) => {
        this.onCategoryEdit.emit(category);
        this.message.text = 'Категорія успішно змінена!';
        window.setTimeout(() => this.message.text = '', 5000)
      });
  }

}
