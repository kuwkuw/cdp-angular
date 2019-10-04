import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product, ProductCategory } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product;

  @Output() addToCart = new EventEmitter<Product>();

  constructor() { }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  getCategory(category: ProductCategory): string {
    return ProductCategory[category];
  }

}
