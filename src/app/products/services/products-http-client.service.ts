import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observer, Observable, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import { AppSettingsService } from '../../core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpClientService {
  productUrl = 'http://localhost:3000/products';

  constructor(
    private http: HttpClient,
    private appSettings: AppSettingsService
  ) { }

  getProducts(): Observable<Product[]> {
    return this.appSettings.getSettings()
      .pipe(
        switchMap(settings => this.http.get<Product[]>(settings.productUrl).pipe(
          catchError(err => {
            // A client-side or network error occurred.
            if (err.error instanceof Error) {
              console.error('An error occurred:', err.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.error(
                `Backend returned code ${err.status}, body was: ${err.error}`
              );
            }

            return throwError('Something bad happened; please try again later.');
          })
        ))
      );
  }

  getProduct(productId: number): Observable<Product> {
    return this.http
      .get<Product>(`${this.productUrl}/${productId}`);
  }

  createProduct(product: Product): Promise<Product> {
    return this.http
      .post(this.productUrl, JSON.stringify(product), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .toPromise()
      .then(response => response as Product)
      .catch(this.handleError);
  }

  updateProduct(product: Product): Promise<Product> {
    return this.http
      .put(
        `${this.productUrl}/${product.id}`,
        JSON.stringify(product),
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .toPromise()
      .then(response => response as Product)
      .catch(this.handleError);
  }

  deleteProduct(product: Product): Promise<Product> {
    const url = `${this.productUrl}/${product.id}`;

    return (
      this.http
        .delete(url)
        .toPromise()
        .catch(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
