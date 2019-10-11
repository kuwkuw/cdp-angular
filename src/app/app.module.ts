import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';
import { AboutComponent } from './layout/components/about/about.component';

import {
  LocalStorageService,
  ConfigOptionsService,
  ConstantsServiceService,
  ConstantsServiceServiceValue,
  RandomString, generatorServiceFactory
} from './core';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    ProductsModule,
    CartModule,
  ],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: ConstantsServiceService, useValue: ConstantsServiceServiceValue },
    { provide: RandomString, useFactory: generatorServiceFactory(10)},
    ConfigOptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
