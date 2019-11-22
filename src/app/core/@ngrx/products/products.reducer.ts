import { Action, createReducer, on } from '@ngrx/store';

import { ProductsState, initialProductState } from './products.state';
import * as ProductsActions from './products.actions';

const reducer = createReducer(
    initialProductState,
    on(ProductsActions.getProducts, state => {
        return { ...state, loading: true };
    }),
    on(ProductsActions.getProductsSuccess, (state, { products }) => {
        const data = [...products];
        return { ...state, data, loaded: true, loading: false };
    }),
    on(ProductsActions.getProductsError, (state, { error }) => {
        return {
            ...state,
            loading: false,
            loaded: false,
            error
        };
    }),
    // on(ProductsActions.getProduct, state => {
    //     return { ...state };
    // }),
    // on(ProductsActions.createProduct, state => {
    //     return { ...state };
    // }),
    // on(ProductsActions.deleteProduct, state => {
    //     return { ...state };
    // }),
    // on(ProductsActions.updateProduct, state => {
    //     return { ...state };
    // }),
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
    return reducer(state, action);
}
