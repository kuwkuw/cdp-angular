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

export const getProduct = createAction(
    '[Get Product Page (App/Admin)] GET_PRODUCT',
    props<{ productId: number }>()
);

export const getProductSuccess = createAction(
    '[Get Product Success Effect (App/Admin)] GET_PRODUCT_SUCCESS',
    props<{ productId: number }>()
);

export const getProductError = createAction(
    '[Get Product Effect (App/Admin)] GET_PRODUCT_ERROR',
    props<{ error: Error | string }>()
);

export const createProduct = createAction(
    '[Product List Page (Admin)] CREATE_PRODUCT',
    props<{ product: Product }>()
);

export const createProductSuccess = createAction(
    '[Create Product Effect (Admin)] CREATE_PRODUCT_SUCCESS',
    props<{ product: Product }>()
);

export const createProductError = createAction(
    '[Create Product Effect (Admin)] CREATE_PRODUCT_ERROR',
    props<{ error: Error | string }>()
);

export const updateProduct = createAction(
    '[Update List Effect (Admin)] UPDATE_PRODUCT',
    props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
    '[Update List Effect (Admin)] UPDATE_PRODUCT_SUCCESS',
    props<{ product: Product }>()
);

export const updateProductError = createAction(
    '[Update List Effect (Admin)] UPDATE_PRODUCT_ERROR',
    props<{ error: Error | string }>()
);

export const deleteProduct = createAction(
    '[Product List Page (Admin)] DELETE_PRODUCT',
    props<{ product: Product }>()
);

export const deleteProductSuccess = createAction(
    '[Product List Page (Admin)] DELETE_PRODUCT_SUCCESS',
    props<{ product: Product }>()
);

export const deleteProductError = createAction(
    '[Product List Page (Admin)] DELETE_PRODUCT_ERROR',
    props<{ error: Error | string }>()
);
