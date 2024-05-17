import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appAttribute]',
  standalone: true
})
export class AttributeDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onClick() {
    const randomX = Math.floor(Math.random() * 500);
    const randomY = Math.floor(Math.random() * 500);
    this.el.nativeElement.style.position = 'absolute';
    this.el.nativeElement.style.left = `${randomX}px`;
    this.el.nativeElement.style.top = `${randomY}px`;
  }
}
