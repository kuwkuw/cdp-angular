import { Component, OnInit } from '@angular/core';

import { OrderService } from '../../../core';
import { CartService } from '../../../cart/services';
import { CartItem } from '../../../cart/models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  cartItemList: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.cartItemList = this.cartService.cartItemList;
  }

  onConfirm(): void {
    this.orderService.addOrder(this.cartItemList);
  }
}
