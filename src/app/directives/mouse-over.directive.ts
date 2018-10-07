import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective {
  // @Input() hoverColor:string;
  @Input() appMouseOver: string;
  constructor(private ef: ElementRef, public renderer: Renderer) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.appMouseOver);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  public highlight(color) {
    this.ef.nativeElement.style.backgroundColor = color;
  }
}
