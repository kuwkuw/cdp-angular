import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent, OrderComponent, LoginComponent } from './components';

@NgModule({
  declarations: [ AboutComponent, OrderComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
