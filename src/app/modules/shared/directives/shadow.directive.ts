import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {
  static defaultShadow = 'rgb(85, 85, 85) 1px 1px 5px';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') handleMouseEnter() {
    this.setShadow(true);
  }

  @HostListener('mouseleave') handleMouseleave() {
    this.setShadow(false);
  }

  setShadow(shadow: boolean): void {
    this.el.nativeElement.style.boxShadow = shadow ? ShadowDirective.defaultShadow : '';
  }
}
