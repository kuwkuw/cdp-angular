import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, UpperCasePipe, AsyncPipe } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductListComponent
  ],
  // Пайпы не нужно добавлять в providers.
  // Их можно добавить, если вы хотите испольовать DI для их внедрения в класс компонент,
  // но я такого у вас не увидел.
  // providers: [
  //   CurrencyPipe,
  //   UpperCasePipe,
  //   AsyncPipe
  // ]
})
export class ProductsModule {
}
