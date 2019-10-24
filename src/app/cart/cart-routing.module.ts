import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';
import { CartListComponent, CartItemComponent } from './components';

const routes: Routes = [
    {
        path: 'cart',
        component: CartComponent,
        children: [
            {
                path: '',
                component: CartListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class CartRoutingModule { }

