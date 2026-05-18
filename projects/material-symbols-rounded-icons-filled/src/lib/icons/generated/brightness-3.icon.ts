import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-brightness-3-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msrf-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M630-777q61 57 95.5 138T760-477q0 85-34.5 160T630-185q-52 48-117 76T377-81q-12 0-25-1t-25-4q-10-2-16-9t-6-17q0-8 4-13.5t11-9.5q93-53 146.5-144T520-477q0-104-53.5-200.5T320-827q-7-4-11-9.5t-4-13.5q0-10 6-16.5t16-8.5q12-3 25-4t25-1q71 0 136 27.5T630-777Z"/>
</svg>`,
})
export class MsrfBrightness3IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
