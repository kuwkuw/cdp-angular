import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BgHighlighterDirective } from './directives/bg-highlighter.directive';


@NgModule({
  declarations: [
    BgHighlighterDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BgHighlighterDirective
  ]
})
export class SharedModule { }
