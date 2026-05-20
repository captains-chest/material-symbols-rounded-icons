import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-fan-focus-icon',
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
  <path d="m520-233 15-16q12-11 28.5-11t28.5 12q12 12 12 28t-12 28l-84 84q-12 12-28 12t-28-12l-84-84q-12-12-12-28t12-28q12-12 28.5-11.5T425-248l15 15v-207q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440v207ZM280-393l15-16q12-11 28.5-11t28.5 12q12 12 12 28t-12 28l-84 84q-12 12-28 12t-28-12l-84-84q-12-12-12-28t12-28q12-12 28.5-11.5T185-408l15 15v-207q0-17 11.5-28.5T240-640q17 0 28.5 11.5T280-600v207Zm480 0 15-16q12-11 28.5-11t28.5 12q12 12 12 28t-12 28l-84 84q-12 12-28 12t-28-12l-84-84q-12-12-12-28t12-28q12-12 28.5-11.5T665-408l15 15v-207q0-17 11.5-28.5T720-640q17 0 28.5 11.5T760-600v207ZM80-760q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v200q0 17-11.5 28.5T840-520q-17 0-28.5-11.5T800-560v-200H160v200q0 17-11.5 28.5T120-520q-17 0-28.5-11.5T80-560v-200Z"/>
</svg>`,
})
export class MsrfFanFocusIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
