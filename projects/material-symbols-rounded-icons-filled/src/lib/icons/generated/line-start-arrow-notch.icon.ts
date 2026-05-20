import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-line-start-arrow-notch-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="m383-440 97 170q8 14-3 24.5t-25 2.5L133-446q-19-12-19-34t19-34l319-203q14-8 25 2.5t3 24.5l-97 170h457q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H383Z"/>
</svg>`,
})
export class MsrfLineStartArrowNotchIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
