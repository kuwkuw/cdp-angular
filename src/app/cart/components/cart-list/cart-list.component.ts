import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from '../../../products';
import { CartItem } from '../../models/cart-item.model';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  cartAddSub: Subscription;
  cartList: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // this.cartList = [];
    this.cartService.onCardUpdated$.subscribe(() => {
      this.cartList = this.cartService.cartItemList;
    });
  }

  ngOnDestroy(): void {
    // А где эта подписка создается?
    this.cartAddSub.unsubscribe();
  }

  // тип параметра?
  onRemoveItem(cartItemIndex): void {
    this.cartService.removeItem(cartItemIndex);
  }

  onCountChange(itemIndex: number, newCount: string): void {
    this.cartService.updateItemCount(itemIndex, parseInt(newCount, 10));
  }

  onSaveCartItems(): void {
    this.cartService.saveCart();
  }

  getSum(): number {
    return this.cartService.sum;
  }

  getCount(): number {
    return this.cartService.count;
  }
}
