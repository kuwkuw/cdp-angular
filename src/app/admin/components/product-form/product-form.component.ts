import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { pluck } from 'rxjs/operators';

import { Product, ProductService } from '../../../products';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;
  originalProduct: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(ProductService) private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.data.pipe(pluck('product')).subscribe((product: Product) => {
      this.product = { ...product };
      this.originalProduct = { ...product };
    });
  }

  onSaveProduct() {
    const product = { ...this.product };

    if (product.id) {
      this.productService.updateUser(product);
      // optional parameter: http://localhost:4200/users;id=2
      // this.router.navigate(['/users', { editedUserID: user.id }]);
    } else {
      this.productService.createUser(product);
      this.onGoBack();
    }
    this.originalProduct = { ...this.product };
  }

  onGoBack() {
    this.router.navigate(['./../../'], { relativeTo: this.route });
  }

}
