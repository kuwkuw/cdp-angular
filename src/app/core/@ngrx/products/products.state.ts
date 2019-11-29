import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Product } from '../../../products/models/product.model';

export interface ProductsState extends EntityState<Product> {
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;
}

export function selectProductId(product: Product): number {
    // In this case this would be optional since primary key is id
    return product.id;
}

export function sortProductByName(product1: Product, product2: Product): number {
    return product1.name.localeCompare(product2.name);
}


export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
    selectId: selectProductId,
    sortComparer: sortProductByName
});


export const initialProductState: ProductsState = adapter.getInitialState({
    loading: false,
    loaded: false,
    error: null
});
