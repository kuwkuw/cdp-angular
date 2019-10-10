import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    ProductComponent, // <-- это должен быть приватный компонент
    ProductListComponent
  ],
  providers: [
    // ProductService // этот сервис уже зарегистрирован через собственный декоратор
  ]
})
export class ProductsModule { }
