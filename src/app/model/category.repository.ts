import { Injectable, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { RestService } from "./rest.service";

@Injectable()
export class CategoryRepository implements OnInit {
    private categories: Category[] = [];

    constructor(private restService: RestService) { }

    ngOnInit() {
        this.restService.getCategories().subscribe(categories => this.categories = categories);
    }

    getCategory(id: number): Category | undefined {
        return this.categories.find(p => p.id == id);
    }

}