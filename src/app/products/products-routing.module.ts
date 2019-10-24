import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductComponent,  ProductListComponent} from './components';

const routes: Routes = [
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'product/:productId',
        component: ProductComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }

