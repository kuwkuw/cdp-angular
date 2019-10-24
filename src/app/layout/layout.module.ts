import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent, OrderComponent } from './components';

@NgModule({
  declarations: [ AboutComponent, OrderComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
