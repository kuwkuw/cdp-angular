import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Product, ProductModel } from '../../../products/models/product.model';
import { adapter, ProductsState } from './products.state';
import { selectRouterState } from './../router';


export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectProductsError = createSelector(selectProductsState, (state: ProductsState) => state.error);
export const selectProductsLoaded = createSelector(selectProductsState, (state: ProductsState) => state.loaded);

export const {
    selectEntities: selectProductsEntities,
    selectAll: selectProductsData
} = adapter.getSelectors(selectProductsState);


export const selectSelectedProductByUrl = createSelector(
    selectProductsEntities,
    selectRouterState,
    (products, router): Product => {
        const productID = router.state.params.productId;
        if (productID) {
            return products[productID] as ProductModel;
        } else {
            return new ProductModel();
        }
    });
