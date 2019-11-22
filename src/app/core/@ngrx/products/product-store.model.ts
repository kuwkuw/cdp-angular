import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// @NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductEffects } from './product.effects';
import { productsReducer } from './products.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('products', productsReducer),
        EffectsModule.forFeature([ProductEffects])
    ]
})
export class ProductsStoreModule { }
