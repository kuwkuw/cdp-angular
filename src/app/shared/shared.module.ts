import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BgHighlighterDirective } from './directives/bg-highlighter.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { CustomEmailValidatorDirective } from './validators/custom-email.directive';


@NgModule({
  declarations: [
    BgHighlighterDirective,
    OrderByPipe,
    CustomEmailValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BgHighlighterDirective,
    OrderByPipe,
    CustomEmailValidatorDirective
  ]
})
export class SharedModule { }
