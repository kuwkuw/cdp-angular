import { Injectable } from '@angular/core';


import { CartItem } from '../../cart/models';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  addOrder(order: CartItem[]) {
    const ordersList = this.localStorageService.getItem('orders') || [];
    if (Array.isArray(ordersList)) {
      ordersList.push(order);
    }
    this.localStorageService.setItem('orders', ordersList);
  }

  removeOrder(deletingOrder: CartItem[]) {
    const ordersList = this.getOrderList();
    let firstMatchIndex = -1;
    ordersList.forEach((orderItems, index) => {
      let match = true;
      deletingOrder.forEach(deletingOrderItem => {
        if (!orderItems.find(orderItem => orderItem.product.id === deletingOrderItem.product.id)) {
          match = false;
        }
      });
      if (match && firstMatchIndex === -1) {
        firstMatchIndex = index;
      }
    });
    ordersList.splice(firstMatchIndex, 1);
    this.localStorageService.setItem('orders', ordersList);
  }

  getOrderList(): CartItem[][] {
    return this.localStorageService.getItem('orders') || [];
  }
}
