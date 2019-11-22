import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { AppState, selectProductsData, selectProductsError } from './../../../core/@ngrx';
import * as ProductActions from '../../../core/@ngrx/products/products.actions';

import { Product } from '../../models/product.model';

import { CartService } from '../../../cart/services/cart.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<ReadonlyArray<Product>>;
  productsError$: Observable<Error | string>;

  constructor(
    private cartService: CartService,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(selectProductsData));
    this.productsError$ = this.store.pipe(select(selectProductsError));
    this.store.dispatch(ProductActions.getProducts());
  }

  addProductToCart(product: Product) {
    this.cartService.addItemToCart({ product, count: 1 });
  }

}
