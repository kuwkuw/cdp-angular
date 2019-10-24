import { Injectable } from '@angular/core';
import { Observer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product, ProductCategory } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return new Observable((observer: Observer<Product[]>) => {
      setTimeout(() => {
        observer.next([
          {
            id: 1,
            name: 'Product 2',
            description: 'product 2 description',
            price: 200,
            isAvailable: false,
            category: ProductCategory.home
          },
          {
            id: 2,
            name: 'Product 3',
            description: 'product 3 description',
            price: 500,
            isAvailable: true,
            category: ProductCategory.car
          },
          {
            id: 3,
            name: 'Product 4',
            description: 'product 4 description',
            price: 300,
            isAvailable: false,
            category: ProductCategory.home
          },
          {
            id: 4,
            name: 'Product 5',
            description: 'product 5 description',
            price: 100,
            isAvailable: true,
            category: ProductCategory.car
          },
          {
            id: 5,
            name: 'Product 6',
            description: 'product 6 description',
            price: 200,
            isAvailable: true,
            category: ProductCategory.home
          },
          {
            id: 6,
            name: 'Product 7',
            description: 'product 7 description',
            price: 150,
            isAvailable: true,
            category: ProductCategory.car
          },
        ]);
        observer.complete();
      }, 1000);
    });
  }

  getProduct(productId: number) {
    return this.getProducts().pipe(map((products) => {
      return products.find((product) => product.id = productId);
    }));
  }
}
