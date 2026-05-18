import { Directive } from '@angular/core';

@Directive({
  selector: '[msrIconHost]',
  host: {
    class: 'msr-icon',
  },
})
export class MsrIconHostDirective {}
