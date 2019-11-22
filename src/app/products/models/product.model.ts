export enum ProductCategory {
    car,
    home
}

export interface Product {
    id: number | null;
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    isAvailable?: boolean;
}

export class ProductModel implements Product {
    constructor(
        public id: number = null,
        public name: string = '',
        public description: string = '',
        public price: number = 0,
        public category: ProductCategory = ProductCategory.car,
        public isAvailable?: boolean,
    ) {
        this.isAvailable = isAvailable || false;
    }
}
