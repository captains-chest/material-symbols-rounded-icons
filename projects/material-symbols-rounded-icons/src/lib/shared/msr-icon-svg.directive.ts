import { Directive } from '@angular/core';

@Directive({
  selector: 'svg[msrIconSvg]',
  host: {
    class: 'msr-icon-svg',
  },
})
export class MsrIconSvgDirective {}
