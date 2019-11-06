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
