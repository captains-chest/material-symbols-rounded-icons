import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-wc-icon',
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
  <path d="M220-120v-260h-20q-17 0-28.5-11.5T160-420v-180q0-33 23.5-56.5T240-680h120q33 0 56.5 23.5T440-600v180q0 17-11.5 28.5T400-380h-20v260q0 17-11.5 28.5T340-80h-80q-17 0-28.5-11.5T220-120Zm80-600q-33 0-56.5-23.5T220-800q0-33 23.5-56.5T300-880q33 0 56.5 23.5T380-800q0 33-23.5 56.5T300-720Zm300 600v-200h-65q-20 0-32-16.5t-5-36.5l84-253q8-26 29.5-40t48.5-14q27 0 48.5 14t29.5 40l84 253q7 20-5 36.5T785-320h-65v200q0 17-11.5 28.5T680-80h-40q-17 0-28.5-11.5T600-120Zm60-600q-33 0-56.5-23.5T580-800q0-33 23.5-56.5T660-880q33 0 56.5 23.5T740-800q0 33-23.5 56.5T660-720Z"/>
</svg>`,
})
export class MsrfWcIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
