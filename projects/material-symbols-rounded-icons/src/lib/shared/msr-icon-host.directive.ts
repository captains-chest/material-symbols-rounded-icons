import { Directive } from '@angular/core';

@Directive({
  selector: '[msrIconHost]',
  host: {
    '[style.display]': '"flex"',
    '[style.flex]': '"1 1 auto"',
    '[style.min-width]': '"0"',
    '[style.min-height]': '"0"',
  },
})
export class MsrIconHostDirective {}
