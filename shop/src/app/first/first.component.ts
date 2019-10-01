import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductCategory } from '../product-list/models/product.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  item: Product;
  items: Product[];

  constructor() { }

  ngOnInit() {
    this.item = {
      name: 'Product 1',
      description: 'product 1 description',
      price: 100,
      isAvailable: true,
      category: ProductCategory.car
    };

    this.items = [
      {
        name: 'Product 2',
        description: 'product 2 description',
        price: 200,
        isAvailable: false,
        category: ProductCategory.home
      },
      {
        name: 'Product 3',
        description: 'product 3 description',
        price: 500,
        isAvailable: true,
        category: ProductCategory.car
      },
      {
        name: 'Product 4',
        description: 'product 4 description',
        price: 300,
        isAvailable: false,
        category: ProductCategory.home
      }
    ];
  }

  getCategory(category: ProductCategory): string {
    return ProductCategory[category];
  }

}
