import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

import { SharedModule } from '../shared';

import { CartService } from './services/cart.service';


@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    CartListComponent
  ],
  providers: [
    // CartService // сервис уже зарегистрирован с помощью своего декоратора
  ]
})
export class CartModule { }
