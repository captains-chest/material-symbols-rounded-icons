import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-arrow-insert-icon',
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
  <path d="M320-624v304q0 17-11.5 28.5T280-280q-17 0-28.5-11.5T240-320v-400q0-17 11.5-28.5T280-760h400q17 0 28.5 11.5T720-720q0 17-11.5 28.5T680-680H376l356 356q11 11 11 28t-11 28q-11 11-28 11t-28-11L320-624Z"/>
</svg>`,
})
export class MsrfArrowInsertIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
