import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({ selector: '[queryInput]' })
export class QueryInputDirective {
  private type: string;

  constructor(public template: TemplateRef<unknown>) {}

  /** Unique name for query input type. */
  @Input()
  get queryInputType(): string {
    return this.type;
  }

  set queryInputType(value: string) {
    // If the directive is set without a type (updated programatically), then this setter will
    // trigger with an empty string and should not overwrite the programatically set value.
    if (!value) {
      return;
    }
    this.type = value;
  }
}
