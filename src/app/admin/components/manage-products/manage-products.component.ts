import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService, Product } from '../../../products/';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // А зачем тут @Inject(ProductService)?
    @Inject(ProductService) private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onEdit(product: Product) {
    this.router.navigate(['./edit', product.id], { relativeTo: this.route });
  }

  onAdd() {
    this.router.navigate(['./add'], { relativeTo: this.route });
  }

}
