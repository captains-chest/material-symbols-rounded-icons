import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'svg[msrIconSvg]',
  standalone: true,
})
export class MsrIconSvgDirective {
  @HostBinding('style.width') protected readonly width = '100%';
  @HostBinding('style.height') protected readonly height = '100%';
  @HostBinding('style.fill') protected readonly fill = 'currentColor';
  @HostBinding('style.display') protected readonly display = 'block';
}
