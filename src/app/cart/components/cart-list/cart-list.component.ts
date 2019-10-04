import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from '../../../products';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  cartAddSub: Subscription;
  cartList: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartList = [];
    this.cartService.onAddToCard$.subscribe(() => {
      this.cartList = this.cartService.cartList;
    });
  }

  ngOnDestroy(): void {
    this.cartAddSub.unsubscribe();
  }

  removeItem(cartItemIndex) {
    this.cartService.removeItem(cartItemIndex);
  }

  getSum(): number {
    return this.cartService.sum;
  }

  getCount(): number {
    return this.cartService.count;
  }
}
