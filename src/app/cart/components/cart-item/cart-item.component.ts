import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../products';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: Product;

  @Output() removeItem = new EventEmitter<Product>();
  @Output() countChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onRemoveItem() {
    this.removeItem.emit();
  }

  changeCount(newCount: number): void {
    this.countChange.emit(newCount);
  }

  increment(): void {
    this.changeCount(this.item.count + 1);
  }

  decrement(): void {
    if (this.item.count > 1) {
      this.changeCount(this.item.count - 1);
    } else {
      this.removeItem.emit();
    }
  }

}
