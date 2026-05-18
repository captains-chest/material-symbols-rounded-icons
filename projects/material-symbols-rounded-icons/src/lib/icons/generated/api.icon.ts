import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-api-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="m480-400-80-80 80-80 80 80-80 80Zm-85-235L295-735l128-128q12-12 27-18t30-6q15 0 30 6t27 18l128 128-100 100-85-85-85 85ZM225-295 97-423q-12-12-18-27t-6-30q0-15 6-30t18-27l128-128 100 100-85 85 85 85-100 100Zm510 0L635-395l85-85-85-85 100-100 128 128q12 12 18 27t6 30q0 15-6 30t-18 27L735-295ZM423-97 295-225l100-100 85 85 85-85 100 100L537-97q-12 12-27 18t-30 6q-15 0-30-6t-27-18Z"/>
</svg>`,
})
export class MsrApiIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
