import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-currency-yuan-icon',
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
  <path d="M440-160v-240H280q-17 0-28.5-11.5T240-440q0-17 11.5-28.5T280-480h149L239-778q-13-20-1.5-41t35.5-21q11 0 20 5t14 14l173 273 173-273q5-9 14-14t20-5q24 0 35.5 21t-1.5 41L531-480h149q17 0 28.5 11.5T720-440q0 17-11.5 28.5T680-400H520v240q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160Z"/>
</svg>`,
})
export class MsrfCurrencyYuanIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
