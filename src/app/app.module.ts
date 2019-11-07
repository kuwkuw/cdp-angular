import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products';
import { SharedModule } from './shared';
import { SpinnerModule } from './widgets/spinner/spinner.module';

import { AppComponent } from './app.component';

import {
  LocalStorageService,
  ConfigOptionsService,
  ConstantsServiceService,
  ConstantsServiceServiceValue,
  RandomString, generatorServiceFactory
} from './core';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    ProductsModule,
    CartModule,
    LayoutModule,
    SpinnerModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: ConstantsServiceService, useValue: ConstantsServiceServiceValue },
    { provide: RandomString, useFactory: generatorServiceFactory(10) },
    ConfigOptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Если запустить приложение так ng build --prod, то
// ERROR in src/app/products/components/product/product.component.html(15,67): Property 'isDetailsMode' is private and
// only accessible within class 'ProductComponent'.
// src/app/admin/components/manage-products/manage-products.component.html(5,47): Property 'addProductToCart' does not
// exist on type 'ManageProductsComponent'.
