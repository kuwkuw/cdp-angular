import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observer, Observable, throwError, from } from 'rxjs';

import { CartItem } from '../../cart/models';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderHttpClientService {
  ordersUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(this.ordersUrl);
  }

  createOrder(order: Order): Promise<Order> {
    return this.http
      .post(this.ordersUrl, JSON.stringify(order), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .toPromise()
      .then(response => response as Order);
  }

  deleteOrder(order: Order): Promise<Order> {
    const url = `${this.ordersUrl}/${order.id}`;

    return this.http.delete(url)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
