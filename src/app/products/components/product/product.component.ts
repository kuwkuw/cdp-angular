import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AutoUnsubscribe } from '../../../core';
import { Subscription } from 'rxjs';

// @NgRx
import { Store, select } from '@ngrx/store';
import { AppState, selectSelectedProductByUrl } from './../../../core/@ngrx';
import * as ProductsActions from './../../../core/@ngrx/products/products.actions';

import { Product, ProductCategory } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

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
    private router: Router,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    if (!this.product) {
      this.isDetailsMode = true;
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
    this.router.navigate(['product', this.product.id]);
  }

  getCategory(category: ProductCategory): string {
    return ProductCategory[category];
  }

}
