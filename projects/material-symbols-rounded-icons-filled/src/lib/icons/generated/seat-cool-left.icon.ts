import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-seat-cool-left-icon',
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
  <path d="M302-120q-27 0-48-16.5T225-179l-96-373q-4-15-6.5-30.5T120-614q0-28 6.5-55t19.5-52q9-18 25.5-28.5T208-760q23 0 40 17t17 40q0 11-4 21t-12 18q-19 20-22.5 46.5T234-566l20 42q29 63 47.5 130T320-257v44q17-11 36-19t40-8h225q25 0 42.5 17.5T681-180q0 25-17.5 42.5T621-120H302Zm298-240q-13 0-21.5-8.5T570-390v-58l-48 48q-9 9-21 9t-21-9q-9-9-9-21t9-21l90-90v-38h-38l-90 90q-9 9-21 9t-21-9q-9-9-9-21t9-21l48-48h-58q-13 0-21.5-8.5T360-600q0-13 8.5-21.5T390-630h58l-48-48q-9-9-9-21t9-21q9-9 21-9t21 9l90 90h38v-38l-90-90q-9-9-9-21t9-21q9-9 21-9t21 9l48 48v-58q0-13 8.5-21.5T600-840q13 0 21.5 8.5T630-810v58l48-48q9-9 21-9t21 9q9 9 9 21t-9 21l-90 90v38h38l90-90q9-9 21-9t21 9q9 9 9 21t-9 21l-48 48h58q13 0 21.5 8.5T840-600q0 13-8.5 21.5T810-570h-58l48 48q9 9 9 21t-9 21q-9 9-21 9t-21-9l-90-90h-38v38l90 90q9 9 9 21t-9 21q-9 9-21 9t-21-9l-48-48v58q0 13-8.5 21.5T600-360Z"/>
</svg>`,
})
export class MsrfSeatCoolLeftIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
