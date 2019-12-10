import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductService } from './product.service';
import { ProductsHttpClientService } from './products-http-client.service';

const products = [
    {
        id: 1,
        name: 'Product 2',
        description: 'product 2 description',
        price: 200,
        isAvailable: false,
        category: 1
    },
    {
        id: 2,
        name: 'Product 3',
        description: 'product 3 description',
        price: 500,
        isAvailable: true,
        category: 0
    }
];

describe('ProductService', () => {
    let service: ProductService;
    beforeEach(() => {
        const fakedProductsHttpClientService = {
            getProducts() {
                return of(products);
            }
        };
        service = new ProductService(fakedProductsHttpClientService as ProductsHttpClientService);
    });
    it('should create an instance', (done: DoneFn) => {
        service.getProducts().subscribe(value => {
            expect(value).toEqual(products);
            done();
        });
    });
});
