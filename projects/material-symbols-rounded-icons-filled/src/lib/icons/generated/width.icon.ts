import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-width-icon',
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
  <path d="m273-440 35 37q11 11 11 27.5T308-348q-12 12-28.5 12T252-348L148-451q-6-6-9-13.5t-3-15.5q0-8 3-15t9-13l104-104q11-11 27.5-11t28.5 11q12 12 12 28.5T308-555l-35 35h414l-36-36q-11-11-11-27.5t12-28.5q11-11 27.5-11t28.5 11l103 104q6 6 9 13t3 15q0 8-3 15.5t-9 13.5L707-347q-11 11-27.5 11T651-348q-11-11-11-27.5t11-27.5l36-37H273Z"/>
</svg>`,
})
export class MsrfWidthIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
