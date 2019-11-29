import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable, of } from 'rxjs';
import { delay, map, catchError, finalize, take } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { AppState, selectSelectedProductByUrl } from './../../core/@ngrx';
import * as ProductsActions from '../../core/@ngrx/products/products.actions';
import * as RouterActions from './../../core/@ngrx/router/router.actions';

import { Product } from './../models/product.model';
import { ProductService } from './../services/product.service';
import {SpinnerService} from '../../widgets';


@Injectable({
    providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<Product> {
    constructor(
        private store: Store<AppState>,
        private spinner: SpinnerService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Product | null> {
        this.spinner.show();

        return this.store.pipe(
            select(selectSelectedProductByUrl),
            delay(1000),
            map((product: Product) => {
                if (product) {
                    return product;
                } else {
                    this.store.dispatch(RouterActions.go({path: ['/products']}));
                    return null;
                }
            }),
            take(1),
            catchError(() => {
                this.store.dispatch(RouterActions.go({path: ['/products']}));
                // catchError MUST return observable
                return of(null);
            }),
            finalize(() => this.spinner.hide())
        );
    }
}
