import { Directive } from '@angular/core';

@Directive({
  selector: 'svg[msrfIconSvg]',
  host: {
    class: 'msrf-icon-svg',
  },
})
export class MsrfIconSvgDirective {}
