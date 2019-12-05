import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { AboutComponent, OrderComponent, LoginComponent } from './components';
import { ProcessOrderComponent } from './components/process-order/process-order.component';

@NgModule({
  declarations: [AboutComponent, OrderComponent, LoginComponent, ProcessOrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LayoutModule { }
