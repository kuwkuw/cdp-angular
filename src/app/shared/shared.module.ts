import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BgHighlighterDirective } from './directives/bg-highlighter.directive';
import { OrderByPipe } from './pipes/order-by.pipe';


@NgModule({
  declarations: [
    BgHighlighterDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BgHighlighterDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
