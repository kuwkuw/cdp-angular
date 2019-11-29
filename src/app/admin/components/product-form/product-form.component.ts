import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Subscription, from } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { AppState, selectSelectedProductByUrl, selectProductsData, selectProductsError } from './../../../core/@ngrx';
import * as ProuductsActions from '../../../core/@ngrx/products/products.actions';

import { AutoUnsubscribe } from '../../../core';
import { Product, ProductModel } from '../../../products/models/product.model';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
@AutoUnsubscribe()
export class ProductFormComponent implements OnInit {
  sub: Subscription;
  product: Product;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.sub = this.route.data.pipe(pluck('product')).subscribe((product: Product) => {
      this.product = { ...product };
    });
  }

  onSaveProduct() {
    const product = { ...this.product };

    if (product.id) {
      this.store.dispatch(ProuductsActions.updateProduct({ product }));
    } else {
      this.store.dispatch(ProuductsActions.createProduct({ product }));
    }
  }

}
