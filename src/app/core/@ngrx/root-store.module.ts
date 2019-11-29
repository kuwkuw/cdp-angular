import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';

import { routerReducers, CustomSerializer, RouterEffects } from './router';

import { environment } from './../../../environments/environment';


import { ProductsStoreModule } from './products/product-store.model';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot(routerReducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictStateSerializability: true,
                strictActionSerializability: false
            }
        }),
        // Instrumentation must be imported after importing StoreModule (config is optional)
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            routerState: RouterState.Minimal,
            serializer: CustomSerializer // has a priority over routerState
        }),
        EffectsModule.forRoot([RouterEffects]),
        ProductsStoreModule,

    ]
})
export class RootStoreModule { }
