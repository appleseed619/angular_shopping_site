import { Injectable, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { RestService } from "./rest.service";

@Injectable()
export class ProductRepository implements OnInit {
    private products: Product[] = [];

    constructor(private restService: RestService) { }

    ngOnInit() {
        this.restService.getProducts().subscribe(products => this.products = products);
    }

    getProduct(id: number): Product | undefined {
        return this.products.find(p => p.id == id);
    }

}