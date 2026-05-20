import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-mobile-camera-rear-icon',
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
  <path d="M480-680q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680ZM200-800q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v164q0 17-11.5 28.5T720-280H544q-16 0-30.5-6T488-303l-38-38q-12-12-26.5-17.5T394-364q-15 0-30 5.5T337-341l-38 38q-11 11-25.5 17t-30.5 6h-3q-17 0-28.5-11.5T200-320v-480Zm182 640H240q-17 0-28.5-11.5T200-200q0-17 11.5-28.5T240-240h142l-16-16q-11-11-11-28t11-28q11-11 28-11t28 11l84 84q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-84 84q-11 11-28 11t-28-11q-11-11-11-28t11-28l16-16Zm218 0q-17 0-28.5-11.5T560-200q0-17 11.5-28.5T600-240h120q17 0 28.5 11.5T760-200q0 17-11.5 28.5T720-160H600Z"/>
</svg>`,
})
export class MsrfMobileCameraRearIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
