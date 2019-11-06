import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Product } from '../../models/product.model';

import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addProductToCart(product: Product) {
    this.cartService.addItemToCart({ product, count: 1 });
  }

}
