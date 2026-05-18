import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-no-drinks-icon',
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
  <path d="M592-482 394-680h268l72-80H314l-80-80h543q27 0 44 18.5t17 41.5q0 11-4 21t-12 19L592-482ZM280-120q-17 0-28.5-11.5T240-160q0-17 11.5-28.5T280-200h160v-207L84-763q-11-11-11-27.5T84-819q12-12 28.5-12t28.5 12l679 679q12 12 12 28t-12 28q-12 12-28.5 12T763-84L521-326l-1 126h160q17 0 28.5 11.5T720-160q0 17-11.5 28.5T680-120H280Z"/>
</svg>`,
})
export class MsrfNoDrinksIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
