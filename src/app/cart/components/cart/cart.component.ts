import { Component, OnInit } from '@angular/core';

import { Product } from '../../../products';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.products;
  }

}
