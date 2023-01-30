import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent {
  public selectedCategory: Category = null;
  @Output() category = new EventEmitter<Category>();

  constructor(
    private categoryRepository: CategoryRepository
  ) { }


  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }


  changeCategory(newCategory?: Category) {
    this.selectedCategory = newCategory;
    this.category.emit(newCategory);
  }
}
