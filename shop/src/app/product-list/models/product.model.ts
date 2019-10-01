export enum ProductCategory {
    car,
    home
}

export interface Product {
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    isAvailable: boolean;
}
