import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, UpperCasePipe, AsyncPipe } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent
  ],
  providers: [
    CurrencyPipe,
    UpperCasePipe,
    AsyncPipe,
    ProductService
  ]
})
export class ProductsModule { }
