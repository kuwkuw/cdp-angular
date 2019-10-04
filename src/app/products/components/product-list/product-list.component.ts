import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addProductToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
