import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private onAddToCard = new Subject<Product>();
  private productsInCart: Product[] = [];

  onAddToCard$ = this.onAddToCard.asObservable();

  get cartList() {
    return this.productsInCart;
  }

  get count() {
    return this.productsInCart.length;
  }

  get sum() {
    return this.productsInCart.reduce((sun: number, curItem: Product) => sun += curItem.price, 0);
  }

  constructor() { }

  addToCart(product: Product): void {
    this.productsInCart.push(product);
    this.onAddToCard.next(product);
  }

  removeItem(itemIndex: number): void {
    this.productsInCart.splice(itemIndex, 1);
  }
}
