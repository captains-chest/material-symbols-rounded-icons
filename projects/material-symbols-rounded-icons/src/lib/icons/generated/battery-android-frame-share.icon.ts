import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-battery-android-frame-share-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M160-240q-50 0-85-35t-35-85v-240q0-50 35-85t85-35h567l-80 80H160q-17 0-28.5 11.5T120-600v240q0 17 11.5 28.5T160-320h240q17 0 28.5 11.5T440-280q0 17-11.5 28.5T400-240H160Zm40-120q-17 0-28.5-11.5T160-400v-160q0-17 11.5-28.5T200-600h407q-69 0-118 44.5T440-440v40q0 17-11.5 28.5T400-360H200Zm360 40q-17 0-28.5-11.5T520-360v-80q0-33 23.5-56.5T600-520h167l-35-36q-11-12-11-28.5t11-27.5q12-12 28.5-11.5T788-612l104 104q12 12 12 28t-12 28L789-349q-12 12-28.5 12T732-349q-12-12-12-28t12-28l35-35H600v80q0 17-11.5 28.5T560-320Z"/>
</svg>`,
})
export class MsrBatteryAndroidFrameShareIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
