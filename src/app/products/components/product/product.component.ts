import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AutoUnsubscribe } from '../../../core';
import { Subscription } from 'rxjs';

// @NgRx
import { Store, select } from '@ngrx/store';
import { AppState, selectSelectedProductByUrl } from './../../../core/@ngrx';
import * as RouterActions from '../../../core/@ngrx/router/router.actions';

import { Product, ProductCategory } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
@AutoUnsubscribe()
export class ProductComponent implements OnInit {
  isDetailsMode = false;

  private sub: Subscription;

  @Input() product: Product;

  @Output() addToCart = new EventEmitter<Product>();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    if (!this.product) {
      this.isDetailsMode = true;
      // На мой взгляд, это презентационный компонент и тут не должно быть этого кода
      this.sub = this.store.pipe(
        select(selectSelectedProductByUrl)
      ).subscribe({
        next: (product) => this.product = product,
        error: (err) => console.log(err)
      });
    }
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  onShowProductDetails() {
    this.store.dispatch(RouterActions.go({path: ['product', this.product.id]}));
  }

  getCategory(category: ProductCategory): string {
    return ProductCategory[category];
  }

}
