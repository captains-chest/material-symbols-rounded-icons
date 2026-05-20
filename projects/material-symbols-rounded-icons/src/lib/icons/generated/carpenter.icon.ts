import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-carpenter-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M619-108q-11 11-25.5 17T563-85q-16 0-31-6t-26-17l-56-56q-11-11-16.5-24.5T427-216q-1-14 3.5-28t13.5-26l6-8-326-466 156-156 509 509q11 11 17 25.5t6 30.5q0 16-6 31t-17 26L619-108ZM507-335l113-112-340-340-52 52 279 400Zm56 170 169-169-56-57-170 170 57 56Zm-56-170 113-112-113 112Z"/>
</svg>`,
})
export class MsrCarpenterIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
