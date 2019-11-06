import { Injectable } from '@angular/core';
import { Observer, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Product, ProductCategory } from '../models/product.model';
import { ProductsHttpClientService } from './products-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private productsHttpClientService: ProductsHttpClientService
  ) { }

  getProducts(): Observable<Product[]> {
    return this.productsHttpClientService.getProducts();
  }

  getProduct(productId: number) {
    return this.productsHttpClientService.getProduct(productId);
  }

  createProduct(product: Product) {
    return this.productsHttpClientService.createProduct(product);
  }

  updateProduct(product: Product) {
    return this.productsHttpClientService.updateProduct(product);
  }

  deleteProduct(product: Product) {
    return this.productsHttpClientService.deleteProduct(product);
  }
}
