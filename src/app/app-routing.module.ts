import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent, ProcessOrderComponent, LoginComponent } from './layout';
import { AuthGuard } from './core';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'order',
        component: ProcessOrderComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        canLoad: [AuthGuard],
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        data: { title: 'Admin' }
    },
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

