import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-house-with-shield-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M320-458q0 66 38 128t103 84q5 2 9.5 2.5t9.5.5q5 0 9.5-.5t9.5-2.5q65-22 103-84t38-128v-65q0-17-9-31.5T607-577l-100-50q-13-6-27-6t-27 6l-100 50q-15 8-24 22.5t-9 31.5v65Zm-80 338q-33 0-56.5-23.5T160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H240Zm0-80h480v-360L480-740 240-560v360Zm240-270Z"/>
</svg>`,
})
export class MsrHouseWithShieldIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
