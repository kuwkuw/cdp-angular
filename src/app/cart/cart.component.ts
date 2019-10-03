import { Component, OnInit } from '@angular/core';

import { Product } from '../product-list/models/product.model';

import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[]; // пока ок, но обычно в корзине можно увелиить количество товара

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.products;
  }

}
