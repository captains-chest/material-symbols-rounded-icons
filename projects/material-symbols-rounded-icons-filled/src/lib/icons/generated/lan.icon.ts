import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-lan-icon',
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
  <path d="M120-160v-120q0-33 23.5-56.5T200-360h40v-80q0-33 23.5-56.5T320-520h120v-80h-40q-33 0-56.5-23.5T320-680v-120q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v120q0 33-23.5 56.5T560-600h-40v80h120q33 0 56.5 23.5T720-440v80h40q33 0 56.5 23.5T840-280v120q0 33-23.5 56.5T760-80H600q-33 0-56.5-23.5T520-160v-120q0-33 23.5-56.5T600-360h40v-80H320v80h40q33 0 56.5 23.5T440-280v120q0 33-23.5 56.5T360-80H200q-33 0-56.5-23.5T120-160Z"/>
</svg>`,
})
export class MsrfLanIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
