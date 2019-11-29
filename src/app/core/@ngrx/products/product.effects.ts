import { Injectable, Inject } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// rxjs
import { Observable, from, of, pipe } from 'rxjs';
import { concatMap, map, pluck, switchMap, catchError, takeUntil, tap } from 'rxjs/operators';

import * as ProductsActions from './products.actions';
import * as RouterActions from './../router/router.actions';

import { Product, ProductModel } from '../../../products/models/product.model';
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

    createUpdateProductSuccess$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductsActions.createProductSuccess, ProductsActions.updateProductSuccess),
            map(action =>
                RouterActions.go({
                    path: ['/admin/products']
                })
            )
        );
    });

    createProduct$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.createProduct),
            pluck('product'),
            concatMap((product: Product) =>
                this.productService.createProduct(product)
                    .then((createdProduct: Product) => {
                        return ProductsActions.createProductSuccess({ product: createdProduct });
                    })
                    .catch(error => ProductsActions.createProductError({ error }))
            )
        )
    );

    updateProduct$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.updateProduct),
            pluck('product'),
            concatMap((product: Product) =>
                this.productService.updateProduct(product)
                    .then(updatedPoduct => ProductsActions.updateProductSuccess({ product: updatedPoduct }))
                    .catch(error => ProductsActions.updateProductError({ error }))
            )
        )
    );

    deleteProduct$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.deleteProduct),
            pluck('product'),
            concatMap((product: Product) =>
                this.productService.deleteProduct(product)
                    .then(() => ProductsActions.deleteProductSuccess({ product }))
                    .catch(error => ProductsActions.deleteProductError({ error }))
            )
        )
    );
}
