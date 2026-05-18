import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-universal-currency-alt-icon',
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
  <path d="M160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200H160Zm540-180h-70q-13 0-21.5 8.5T600-350q0 13 8.5 21.5T630-320h90q17 0 28.5-11.5T760-360v-90q0-13-8.5-21.5T730-480q-13 0-21.5 8.5T700-450v70Zm-220 20q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM260-580h70q13 0 21.5-8.5T360-610q0-13-8.5-21.5T330-640h-90q-17 0-28.5 11.5T200-600v90q0 13 8.5 21.5T230-480q13 0 21.5-8.5T260-510v-70Z"/>
</svg>`,
})
export class MsrfUniversalCurrencyAltIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
