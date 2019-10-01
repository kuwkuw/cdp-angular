import { Injectable } from '@angular/core';

import { Product, ProductCategory } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
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
}
