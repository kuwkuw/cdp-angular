import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';

import { SharedModule } from '../shared';

import { CartService } from './services/cart.service';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [
    CartComponent,
    CartComponent.components
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    SharedModule,
  ],
  exports: [],
  providers: [
    CartService,
    CurrencyPipe
  ]
})
export class CartModule { }
