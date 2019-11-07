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
        // Не смотря на то, что такой вариант работает, видимо Angular это не отслеживает,
        // хотя было бы не плохо, не стоит использовать в приложении два и больше раза forRoot
        // RouterModule.forRoot(routes)
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }

