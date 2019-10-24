import { Component } from '@angular/core';

import { CartListComponent, CartItemComponent } from './components';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  static components = [CartListComponent, CartItemComponent];

  constructor() { }

}
