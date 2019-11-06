import { Component, OnInit } from '@angular/core';

import { OrderService } from '../../../core';
import { CartItem } from '../../../cart/models';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  orders: CartItem[][];
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orders = this.orderService.getOrderList();
  }

  onDelete(deletingOrder: CartItem[]) {
    this.orderService.removeOrder(deletingOrder);
    this.orders = this.orderService.getOrderList();
  }

}
