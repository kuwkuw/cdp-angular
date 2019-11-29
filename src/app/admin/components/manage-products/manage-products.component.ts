import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { AppState, selectProductsData, selectProductsError } from './../../../core/@ngrx';
import * as ProductsActions from '../../../core/@ngrx/products/products.actions';
import * as RouterActions from '../../../core/@ngrx/router/router.actions';
import { Observable } from 'rxjs';

import { ProductService, Product } from '../../../products/';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: Observable<Product[]>;
  products$: Observable<ReadonlyArray<Product>>;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(selectProductsData));
    this.store.dispatch(ProductsActions.getProducts());
  }

  onEdit(product: Product) {
    this.store.dispatch(RouterActions.go({
      path: ['/admin/products/edit', product.id],
    }));
  }

  onDelete(product: Product) {
    const productToDelete: Product = { ...product };
    this.store.dispatch(ProductsActions.deleteProduct({ product: productToDelete }));
  }

  onAdd() {
    this.store.dispatch(RouterActions.go({
      path: ['./add'],
      extras: { relativeTo: this.route }
    }));
  }

}
