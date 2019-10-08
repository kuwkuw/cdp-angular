import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';

import { LocalStorageService } from './core';


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
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
