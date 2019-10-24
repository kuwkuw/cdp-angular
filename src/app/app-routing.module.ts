import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent, OrderComponent } from './layout';

const routes: Routes = [

    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'order',
        component: OrderComponent
    },
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    }];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

