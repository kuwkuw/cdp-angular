import { createAction, props } from '@ngrx/store';

import { Product } from '../../../products/models/product.model';

export const getProducts = createAction('[Product List Page (App/Admin)] GET_PRODUCTS');

export const getProductsSuccess = createAction(
    '[Product List Effect (App/Admin)] GET_PRODUCTS_SUCCESS',
    props<{ products: Product[] }>()
);

export const getProductsError = createAction(
    '[Product List Effect (App/Admin)] GET_PRODUCTS_ERROR',
    props<{ error: Error | string }>()
);
// export const getProduct = createAction(
//     '[Get Product Page (App)] GET_PRODUCT',
//     props<{ productId: number }>()
// );

// export const getProductSuccess = createAction(
//     '[Get Product Success Effect (App/Admin)] GET_PRODUCT_SUCCESS',
//     props<{ productId: number }>()
// );

// export const createProduct = createAction(
//     '[Product List Page] CREATE_PRODUCT',
//     props<{ product: Product }>()
// );

// export const updateProduct = createAction(
//     '[Product List Page] UPDATE_PRODUCT',
//     props<{ product: Product }>()
// );

// export const deleteProduct = createAction(
//     '[Product List Page] DELETE_PRODUCT',
//     props<{ product: Product }>()
// );
