import { Directive } from '@angular/core';

@Directive({
  selector: '[msrfIconHost]',
  host: {
    class: 'msrf-icon',
  },
})
export class MsrfIconHostDirective {}
