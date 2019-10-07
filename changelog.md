# Change Log

## Home task 3
### Added
- CartItemModel povides product info and product count added intocart 
    <br>``{ product: Product, count: number}``    
### Update
- CartService:
    - ```cartItemList``` geter property returns infor about added products into cart.
    - ```count``` geter property returns cout of products in cart.
    - ```sum``` geter property returns sum prices of products in the cart.
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
