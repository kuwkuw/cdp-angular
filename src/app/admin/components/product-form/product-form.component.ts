import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Subscription, from} from 'rxjs';
import { pluck } from 'rxjs/operators';

import {AutoUnsubscribe} from '../../../core';
import { Product, ProductService } from '../../../products';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
@AutoUnsubscribe()
export class ProductFormComponent implements OnInit {
  sub: Subscription;
  product: Product;
  originalProduct: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(ProductService) private productService: ProductService
  ) { }

  ngOnInit() {
    this.sub = this.route.data.pipe(pluck('product')).subscribe((product: Product) => {
      this.product = { ...product };
      this.originalProduct = { ...product };
    });
  }

  onSaveProduct() {
    const product = { ...this.product };

    if (product.id) {
      this.productService.updateProduct(product);
    } else {
      this.productService.createProduct(product);
      this.onGoBack();
    }
    this.originalProduct = { ...this.product };
  }

  onGoBack() {
    this.router.navigate(['./../../'], { relativeTo: this.route });
  }

}
