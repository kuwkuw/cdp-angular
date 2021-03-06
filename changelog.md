# Change Log

## Home task 8
### Added
    - -  Implemented all task from HomeTask9.txt

## Home task 8
### Added
    - ProcessOrderComponent

## Home task 7
### Added
    -  Implemented all task from HomeTask7.txt

## Home task 6
### Added
- Mock server with json-server "db/db.json"
- ProductsHttpClientService
    - ```getProducts(): Observable<Product[]>``` returns list on products
    - ```getProduct(productId: number):Observable<Product[]> ``` returns product by id
    - ```createProduct(product: Product): Promise<Product>``` create new product
    - ```updateProduct(product: Product): Promise<Product>``` update product
    - ```deleteProduct(product: Product): Promise<Product>``` delete product
- AutoUnsubscribe added unsubscribe decorator 
- TimingInterceptor added timing interceptor for "/products" end point
- AppSettings

## Home task 5
### Added
-  Routs: 
    - /products-list
    - /product/:productID
    - /cart
    - /order
    - /admin + canActivateGuard
    - /admin/products
    - /admin/product/add
    - /admin/product/edit:productID + resolve guard
    - /admin/orders

## Home task 4
### Added
- Used builded in pips
    - CurrencyPipe used in ProductComponent
    - UpperCasePipe used in ProductComponent
    - AsyncPipe in ProductListComponent
- Added custom pipe ```orderBy``` in CartListComponent
### Update
-  ProductService updated ```getProducts()``` now returns ```Observable<Product[]>```

## Home task 3
### Added
- CartItemModel provides product info and product count added into cart 
    <br>``{ product: Product, count: number}``
- LocalStorageService provides access to window.localStorage. added provider using 'useClass'
    - ```setItem``` set item into storage by key.
    - ```getItem``` return item from storage by key.
    - ```removeItem``` remove item from storage by key.
- ConfigOptionsService: 
    - ```setConfig``` set configuration object.
    - ```addConfig``` set configuration option or bench of options.
    - ```getConfig``` return configuration options.
- ConstantsService: added provider using 'useValue'
- GeneratorService: added provider using 'useFactory'
- AboutComponent: added component and injector services [LocalStorageService, ConfigOptionsService, ConstantsService, GeneratorService] using directive @Optional()
### Update
- CartService:
    - ```cartItemList``` getter property returns info about added products into cart.
    - ```count``` getter property returns count of products in cart.
    - ```sum``` getter property returns sum prices of products in the cart.
    - ```addItemToCart``` add new cartItem into cartItemList


## Home task 2
### Added
- Have splitted app on modules:
    - AppModule, 
    - CartModule, 
    - ProductsModule, 
    - OrdersModule, 
    - SharedModule
- getProducts() into ProductService
- CartListComponent
- CardItemComponent
- Implemented getSum() for CartListComponent. Returns price sum.
- Removing item from card.
- Implemented get property:
    - 'count': returns count of items added into card.
    - 'sum': returns  sum of the items price.
- Added #appTitle reference into AppComponent and used @ViewChild for setting title value
- Implemented BgHighlighterDirective. When you mouse over a product in the basket (CartItemComponent), stylize it with a background change.
### Removed
- FirstComponent

## Home task 1
### Added
- FirstComponent
- ProductComponent
- ProductsService
- ProductModel
- ProductListComponent
- CartComponent
- CartService
