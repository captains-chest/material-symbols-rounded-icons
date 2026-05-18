import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-clock-arrow-down-icon',
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
  <path d="M340-180q-125 0-212.5-87.5T40-480q0-125 87.5-212.5T340-780q125 0 212.5 87.5T640-480q0 125-87.5 212.5T340-180Zm0-80q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Zm40-233v-107q0-17-11.5-28.5T340-640q-17 0-28.5 11.5T300-600v123q0 8 3 15.5t9 13.5l80 80q11 11 28 11t28-11q11-11 11-28t-11-28l-68-69Zm-40 13Zm412 292-92-92q-11-12-11-28.5t12-27.5q12-11 28.5-11.5T717-336l23 23v-447q0-17 11.5-28.5T780-800q17 0 28.5 11.5T820-760v448l24-24q11-11 28-11t28 11q11 11 11 28t-11 28l-92 92q-12 12-28 12t-28-12Z"/>
</svg>`,
})
export class MsrClockArrowDownIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
