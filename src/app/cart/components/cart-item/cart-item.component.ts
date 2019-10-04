import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/products';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: Product;

  @Output() removeItem = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onRemoveItem() {
    this.removeItem.emit();
  }

}
