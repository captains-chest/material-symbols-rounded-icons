import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-android-cell-dual-5-bar-alert-icon',
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
  <path d="M880-160q-17 0-28.5-11.5T840-200q0-17 11.5-28.5T880-240q17 0 28.5 11.5T920-200q0 17-11.5 28.5T880-160Zm-40-160v-60q0-17 11.5-28.5T880-420q17 0 28.5 11.5T920-380v60q0 17-11.5 28.5T880-280q-17 0-28.5-11.5T840-320ZM40-460v-60q0-25 17.5-42.5T100-580q25 0 42.5 17.5T160-520v60q0 25-17.5 42.5T100-400q-25 0-42.5-17.5T40-460Zm190 0v-120q0-25 17.5-42.5T290-640q25 0 42.5 17.5T350-580v120q0 25-17.5 42.5T290-400q-25 0-42.5-17.5T230-460Zm190 0v-160q0-25 17.5-42.5T480-680q25 0 42.5 17.5T540-620v160q0 25-17.5 42.5T480-400q-25 0-42.5-17.5T420-460Zm190 0v-200q0-25 17.5-42.5T670-720q25 0 42.5 17.5T730-660v200q0 25-17.5 42.5T670-400q-25 0-42.5-17.5T610-460ZM40-220v-40q0-25 17.5-42.5T100-320q25 0 42.5 17.5T160-260v40q0 25-17.5 42.5T100-160q-25 0-42.5-17.5T40-220Zm190 0v-40q0-25 17.5-42.5T290-320q25 0 42.5 17.5T350-260v40q0 25-17.5 42.5T290-160q-25 0-42.5-17.5T230-220Zm190 0v-40q0-25 17.5-42.5T480-320q25 0 42.5 17.5T540-260v40q0 25-17.5 42.5T480-160q-25 0-42.5-17.5T420-220Zm380-253v-267q0-25 17.5-42.5T860-800q25 0 42.5 17.5T920-740v254q-10-2-19.5-3t-20.5-1q-21 0-41.5 4.5T800-473ZM610-220v-40q0-29 22-46.5t50-12.5q-1 7-1.5 14t-.5 15q0 31 9 59t25 52q-8 9-19.5 14t-24.5 5q-25 0-42.5-17.5T610-220Z"/>
</svg>`,
})
export class MsrfAndroidCellDual5BarAlertIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
