import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-camera-rear-icon',
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
  <path d="M240-280q-17 0-28.5-11.5T200-320v-480q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v480q0 17-11.5 28.5T720-280H536q-12 0-23.5-5T493-298l-42-42q-23-23-57-23t-57 23l-42 42q-8 8-19.5 13t-23.5 5h-12Zm240-440q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720Zm-98 560H240q-17 0-28.5-11.5T200-200q0-17 11.5-28.5T240-240h142l-16-16q-11-11-11-28t11-28q11-11 28-11t28 11l84 84q11 11 11 28t-11 28l-84 84q-11 11-28 11t-28-11q-11-11-11-28t11-28l16-16Zm218 0q-17 0-28.5-11.5T560-200q0-17 11.5-28.5T600-240h120q17 0 28.5 11.5T760-200q0 17-11.5 28.5T720-160H600Z"/>
</svg>`,
})
export class MsrfCameraRearIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
