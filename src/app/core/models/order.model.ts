import { CartItem } from '../../cart/models';

export interface Order {
    id?: number;
    items: CartItem[];
}
