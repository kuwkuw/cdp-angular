import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../core/@ngrx';
import * as RouterActions from '../../../core/@ngrx/router/router.actions';

import { CartItem } from '../../models/cart-item.model';

import { CartService } from '../../services/cart.service';

@Component({
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  isAscendingOrder = true;
  cartList: CartItem[] = [];

  constructor(
    private store: Store<AppState>,
    private cartService: CartService) { }

  ngOnInit() {
    this.cartList = this.cartService.cartItemList;
  }

  onRemoveItem(cartItemIndex: number): void {
    this.cartService.removeItem(cartItemIndex);
  }

  onCountChange(itemIndex: number, newCount: string): void {
    this.cartService.updateItemCount(itemIndex, parseInt(newCount, 10));
  }

  onSaveCartItems(): void {
    this.cartService.saveCart();
  }

  onGoToOrder(): void {
    this.store.dispatch(RouterActions.go({
      path: ['/order']
    }));
  }

  getSum(): number {
    return this.cartService.sum;
  }

  getCount(): number {
    return this.cartService.count;
  }
}
