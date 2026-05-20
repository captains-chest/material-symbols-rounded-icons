import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-water-bottle-large-icon',
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
  <path d="M280-80q-33 0-56.5-23.5T200-160v-80q0-33 23.5-56.5T280-320v-200q-33 0-56.5-23.5T200-600v-80q0-33 23.5-56.5T280-760h120v-40q-17 0-28.5-11.5T360-840q0-17 11.5-28.5T400-880h160q17 0 28.5 11.5T600-840q0 17-11.5 28.5T560-800v40h120q33 0 56.5 23.5T760-680v80q0 33-23.5 56.5T680-520v200q33 0 56.5 23.5T760-240v80q0 33-23.5 56.5T680-80H280Z"/>
</svg>`,
})
export class MsrfWaterBottleLargeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
