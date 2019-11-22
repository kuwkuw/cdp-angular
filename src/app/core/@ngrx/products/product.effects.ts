import { Injectable, Inject } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// rxjs
import { Observable, from, of } from 'rxjs';
import { concatMap, map, pluck, switchMap, catchError, takeUntil, tap } from 'rxjs/operators';

import * as ProductsActions from './products.actions';

import { ProductService } from '../../../products/services/product.service';

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) {
        console.log('[PRODUCTS EFFECTS]');
    }

    getProducts$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.getProducts),
            tap(action => console.log('PRODUCTS EFFECTS -> getProducts')),
            switchMap(action =>
                this.productService.getProducts().pipe(
                    map(products => ProductsActions.getProductsSuccess({ products })),
                    catchError(error => of(ProductsActions.getProductsError({ error })))
                )
            )
        )
    );
}
