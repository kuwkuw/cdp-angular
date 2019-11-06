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
    // const ordersList = this.localStorageService.getItem('orders') || [];
    // if (Array.isArray(ordersList)) {
    //   ordersList.push(order);
    // }
    // this.localStorageService.setItem('orders', ordersList);
    this.orderHttpClientService.createOrder({ items })
      .then(order => console.log('order added', order));
  }

  removeOrder(deletingOrder: Order) {
    return this.orderHttpClientService.deleteOrder(deletingOrder)
      .then(_ => this.getOrderList().toPromise());
    // const ordersList = this.getOrderList();
    // let firstMatchIndex = -1;
    // ordersList.forEach((orderItems, index) => {
    //   let match = true;
    //   deletingOrder.forEach(deletingOrderItem => {
    //     if (!orderItems.find(orderItem => orderItem.product.id === deletingOrderItem.product.id)) {
    //       match = false;
    //     }
    //   });
    //   if (match && firstMatchIndex === -1) {
    //     firstMatchIndex = index;
    //   }
    // });
    // ordersList.splice(firstMatchIndex, 1);
    // this.localStorageService.setItem('orders', ordersList);
  }

  getOrderList() {
    return this.orderHttpClientService.getOrders();
  }
}
