import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgHighlighter]'
})
export class BgHighlighterDirective {

  @HostBinding('style.background-color') bgColor: string;

  @HostListener('mouseenter', []) onMouseEnter() {
    this.bgColor = '#92a8d1';
  }

  @HostListener('mouseleave', []) onMouseLeave() {
    this.bgColor = '#fff';
  }

  constructor() { }

}
