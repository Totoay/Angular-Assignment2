import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]',
  standalone: true
})
export class StructuralDirective {

  value?: string

  constructor(private templateRef: TemplateRef<{ value: string}>
    , private ViewContainerRef: ViewContainerRef) {
  }

  @Input('appStructural') set setContext(content: string) {
    this.value = content + ' from directive'
    this.ViewContainerRef.createEmbeddedView(this.templateRef, {
      value: this.value
    })
  }
}