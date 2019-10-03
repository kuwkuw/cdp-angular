import { Injectable } from '@angular/core';

import { Product } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  constructor() { }

  buy(product: Product): void {
    this.products.push(product);
  }
}
