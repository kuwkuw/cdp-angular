import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Product, ProductCategory } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  isDetailsMode = false;

  @Input() product: Product;

  @Output() addToCart = new EventEmitter<Product>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    if (!this.product) {
      this.isDetailsMode = true;
      this.route.paramMap
        .pipe(switchMap((params: ParamMap) => this.productService.getProduct(+params.get('productId'))))
        .subscribe({
          next: (product) => this.product = product,
          error: (err) => console.log(err)
        });
    }
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  onShowProductDetails() {
    this.router.navigate(['product', this.product.id]);
  }

  getCategory(category: ProductCategory): string {
    return ProductCategory[category];
  }

}
