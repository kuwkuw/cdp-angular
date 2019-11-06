import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable, of } from 'rxjs';
import { delay, map, catchError, finalize, take } from 'rxjs/operators';

import { Product } from './../models/product.model';
import { ProductService } from './../services/product.service';
import {SpinnerService} from '../../widgets';


@Injectable({
    providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<Product> {
    constructor(
        private productService: ProductService,
        private router: Router,
        private spinner: SpinnerService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Product | null> {
        if (!route.paramMap.has('productID')) {
            return of({ id: 0, name: '', description: '', category: 0, price: 0, isAvailable: false } as Product);
        }

        this.spinner.show();
        const id = +route.paramMap.get('productID');

        return this.productService.getProduct(id).pipe(
            delay(1000),
            map((product: Product) => {
                if (product) {
                    return product;
                } else {
                    this.router.navigate(['/products']);
                    return null;
                }
            }),
            take(1),
            catchError(() => {
                this.router.navigate(['/products']);
                // catchError MUST return observable
                return of(null);
            }),
            finalize(() => this.spinner.hide())
        );
    }
}
