export enum ProductCategory {
    car,
    home
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    isAvailable: boolean;
}
