import { Action, createReducer, on } from '@ngrx/store';

import { adapter, ProductsState, initialProductState } from './products.state';
import * as ProductsActions from './products.actions';

const reducer = createReducer(
    initialProductState,
    on(ProductsActions.getProducts, state => {
        return { ...state, loading: true };
    }),
    on(ProductsActions.getProductsSuccess, (state, { products }) => {
        return adapter.addAll(products, { ...state, loaded: true, loading: false });
    }),
    on(ProductsActions.getProductsError, (state, { error }) => {
        return {
            ...state,
            loading: false,
            loaded: false,
            error
        };
    }),
    on(ProductsActions.createProduct, state => {
        return { ...state };
    }),

    on(ProductsActions.createProductSuccess, (state, { product }) => {
        return adapter.addOne(product, state);
    }),

    on(ProductsActions.updateProduct, state => {
        return { ...state };
    }),

    on(ProductsActions.updateProductSuccess, (state, { product }) => {
        return adapter.updateOne({ id: product.id, changes: product }, state);
    }),

    on(ProductsActions.deleteProduct, state => {
        return { ...state };
    }),

    on(ProductsActions.deleteProductSuccess, (state, { product }) => {
        return adapter.removeOne(product.id, state);
    }),

    on(
        ProductsActions.createProductError,
        ProductsActions.updateProductError,
        ProductsActions.deleteProductError,
        (state, { error }) => {
            return { ...state, error };
        }),
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
    return reducer(state, action);
}
