import { Injectable } from '@angular/core';


import { CartItem } from '../../cart/models';
import { Order } from '../models/order.model';
import { LocalStorageService } from './local-storage.service';
import { OrderHttpClientService } from './order-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private localStorageService: LocalStorageService,
    private orderHttpClientService: OrderHttpClientService
  ) { }

  addOrder(items: CartItem[]) {
    this.orderHttpClientService.createOrder({ items })
      .then(order => console.log('order added', order));
  }

  removeOrder(deletingOrder: Order) {
    return this.orderHttpClientService.deleteOrder(deletingOrder)
      .then(_ => this.getOrderList().toPromise());
  }

  getOrderList() {
    return this.orderHttpClientService.getOrders();
  }
}
