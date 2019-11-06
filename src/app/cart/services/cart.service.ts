import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';

import { CartItem } from '../models/cart-item.model';

import { LocalStorageService, ConfigOptionsService } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private onCartUpdated = new Subject<CartItem>();
  private itemList: CartItem[] = [];

  onCartUpdated$ = this.onCartUpdated.asObservable();

  get cartItemList(): CartItem[] {
    return this.itemList;
  }

  get count() {
    return this.itemList.reduce((count, item) => (count += item.count), 0);
  }

  get sum() {
    return this.itemList.reduce((sun: number, curItem) => sun += curItem.product.price * curItem.count, 0);
  }

  constructor(private localStorageService: LocalStorageService) { }

  addItemToCart(newItem: CartItem): void {
    this.itemList.push(newItem);
    this.onCartUpdated.next();
  }

  removeItem(itemIndex: number): void {
    this.itemList.splice(itemIndex, 1);
  }

  updateItemCount(index, newCount) {
    this.itemList[index].count = newCount;
    this.onCartUpdated.next();
  }

  saveCart(): void {
    this.localStorageService.setItem('cart-list', this.cartItemList);
  }
}
