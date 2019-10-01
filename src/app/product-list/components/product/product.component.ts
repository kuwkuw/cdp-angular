import { Component, OnInit, Input } from '@angular/core';

import { Product, ProductCategory } from '../../models/product.model';

import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Input() isPurchased = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onBuy(): void {
    console.log('Product hase bought!');
    this.cartService.buy(this.product);
  }

  getCategory(category: ProductCategory): string {
    return ProductCategory[category];
  }

}
