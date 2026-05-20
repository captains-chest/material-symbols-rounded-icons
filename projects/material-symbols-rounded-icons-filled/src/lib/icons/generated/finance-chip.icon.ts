import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-finance-chip-icon',
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
  <path d="M470-320h29v-32q28-4 47.5-23t19.5-49q0-26-20-43.5T500-496v-74q10 3 16.5 10t9.5 17l36-15q-7-21-24-33.5T500-608v-32h-30v31q-28 3-47.5 20.5T403-542q0 27 20.5 45t46.5 29v79q-16-5-27-17t-15-28l-35 15q8 28 28 46t49 22v31Zm30-70v-66q11 5 19.5 12t8.5 21q0 16-8 22.5T500-390Zm-30-119q-11-5-20-12t-9-21q0-14 9-20.5t20-8.5v62ZM320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760h320q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200H320Z"/>
</svg>`,
})
export class MsrfFinanceChipIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
