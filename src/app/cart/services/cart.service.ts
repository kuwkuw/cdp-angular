import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';

import { Product } from '../../products/models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private onAddToCard = new Subject<CartItem>();
  private itemList: CartItem[] = [];

  onAddToCard$ = this.onAddToCard.asObservable();

  get cartItemList() {
    return this.itemList;
  }

  get count() {
    return this.itemList.reduce((count, item) => (count += item.count), 0);
  }

  get sum() {
    return this.itemList.reduce((sun: number, curItem) => sun += curItem.product.price * curItem.count, 0);
  }

  constructor() { }

  addItemToCart(newItem: CartItem): void {
    this.itemList.push(newItem);
    this.onAddToCard.next();
  }

  removeItem(itemIndex: number): void {
    this.itemList.splice(itemIndex, 1);
  }

  updateItemCount(index, newCount) {
    this.itemList[index].count = newCount;
    this.onAddToCard.next();
  }
}
