import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-android-cell-dual-5-bar-plus-icon',
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
  <path d="M760-240h-40q-17 0-28.5-11.5T680-280q0-17 11.5-28.5T720-320h40v-40q0-17 11.5-28.5T800-400q17 0 28.5 11.5T840-360v40h40q17 0 28.5 11.5T920-280q0 17-11.5 28.5T880-240h-40v40q0 17-11.5 28.5T800-160q-17 0-28.5-11.5T760-200v-40ZM40-460v-60q0-25 17.5-42.5T100-580q25 0 42.5 17.5T160-520v60q0 25-17.5 42.5T100-400q-25 0-42.5-17.5T40-460Zm190 0v-120q0-25 17.5-42.5T290-640q25 0 42.5 17.5T350-580v120q0 25-17.5 42.5T290-400q-25 0-42.5-17.5T230-460Zm190 0v-160q0-25 17.5-42.5T480-680q25 0 42.5 17.5T540-620v160q0 25-17.5 42.5T480-400q-25 0-42.5-17.5T420-460ZM40-220v-40q0-25 17.5-42.5T100-320q25 0 42.5 17.5T160-260v40q0 25-17.5 42.5T100-160q-25 0-42.5-17.5T40-220Zm190 0v-40q0-25 17.5-42.5T290-320q25 0 42.5 17.5T350-260v40q0 25-17.5 42.5T290-160q-25 0-42.5-17.5T230-220Zm190 0v-40q0-25 17.5-42.5T480-320q25 0 42.5 17.5T540-260v40q0 25-17.5 42.5T480-160q-25 0-42.5-17.5T420-220Zm380-260v-260q0-25 17.5-42.5T860-800q25 0 42.5 17.5T920-740v300q-25-19-55.5-29.5T800-480ZM670-720q25 0 42.5 17.5T730-660v203q-23 9-42 23t-34 32q-19-5-31.5-21T610-460v-200q0-25 17.5-42.5T670-720Z"/>
</svg>`,
})
export class MsrfAndroidCellDual5BarPlusIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
