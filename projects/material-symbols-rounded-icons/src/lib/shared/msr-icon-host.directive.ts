import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[msrIconHost]',
  standalone: true,
})
export class MsrIconHostDirective {
  @HostBinding('style.display') protected readonly display = 'flex';
  @HostBinding('style.flex') protected readonly flex = '1 1 auto';
  @HostBinding('style.min-width') protected readonly minWidth = '0';
  @HostBinding('style.min-height') protected readonly minHeight = '0';
}
