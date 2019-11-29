import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { OrderService, AutoUnsubscribe } from '../../../core';
import { Order } from '../../../core/models/order.model';
import { CartItem } from '../../../cart/models';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
@AutoUnsubscribe()
export class ManageOrdersComponent implements OnInit {

  sub: Subscription;
  orders: Order[];
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.sub = this.orderService.getOrderList().subscribe(orders => this.orders = orders);
  }

  onDeleteOrder(order: Order) {
    this.orderService.removeOrder(order).then(orders => this.orders = orders);
  }

}
