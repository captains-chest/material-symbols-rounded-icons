import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-photo-frame-icon',
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
  <path d="M240-120q-17 0-28.5-11.5T200-160v-40h-80q-33 0-56.5-23.5T40-280v-440q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v440q0 33-23.5 56.5T840-200h-80v40q0 17-11.5 28.5T720-120H240Zm1-240h479q12 0 18-11t-2-21L596-579q-6-8-16-8t-16 8L440-420l-84-101q-6-8-15.5-7.5T325-520L225-392q-8 10-2.5 21t18.5 11Z"/>
</svg>`,
})
export class MsrfPhotoFrameIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
