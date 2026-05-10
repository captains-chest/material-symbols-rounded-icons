import { Directive } from '@angular/core';

@Directive({
  selector: 'svg[msrfIconSvg]',
  host: {
    '[style.width]': '"100%"',
    '[style.height]': '"100%"',
    '[style.fill]': '"currentColor"',
    '[style.display]': '"block"',
  },
})
export class MsrfIconSvgDirective {}
