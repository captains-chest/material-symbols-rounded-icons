import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-android-cell-5-bar-off-icon',
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
  <path d="M420-220v-180L70-645q-17-12-20.5-32t8.5-37q12-17 32.5-21t37.5 8l704 494q17 12 21 32t-8 37q-12 17-32.5 20.5T775-152l-102-71h57v3q0 25-17.5 42.5T670-160q-25 0-42.5-17.5T610-220v-47l-70-49v93q0 27-17.5 45T480-160q-25 0-42.5-17.5T420-220Zm-380 0v-120q0-25 17.5-42.5T100-400q25 0 42.5 17.5T160-340v120q0 25-17.5 42.5T100-160q-25 0-42.5-17.5T40-220Zm190 0v-200q0-25 17.5-42.5T290-480q25 0 42.5 17.5T350-420v200q0 25-17.5 42.5T290-160q-25 0-42.5-17.5T230-220Zm500-207-120-84v-109q0-25 17.5-42.5T670-680q25 0 42.5 17.5T730-620v193Zm190 133-120-84v-362q0-25 17.5-42.5T860-800q25 0 42.5 17.5T920-740v446Z"/>
</svg>`,
})
export class MsrAndroidCell5BarOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
