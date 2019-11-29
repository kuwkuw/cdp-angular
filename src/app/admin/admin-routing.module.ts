import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent, ManageProductsComponent, ManageOrdersComponent, ProductFormComponent } from './components';
import { AuthGuard } from '../core';
import { ProductResolveGuard } from '../products';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'products',
            component: ManageProductsComponent
          },
          {
            path: 'products/add',
            component: ProductFormComponent,
          },
          {
            path: 'products/edit/:productId',
            component: ProductFormComponent,
            resolve: {
              product: ProductResolveGuard
            }
          },
          {
            path: 'orders',
            component: ManageOrdersComponent
          },
          {
            path: '',
            component: AdminDashboardComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminDashboardComponent, ManageProductsComponent, ManageOrdersComponent, ProductFormComponent
  ];
 }
