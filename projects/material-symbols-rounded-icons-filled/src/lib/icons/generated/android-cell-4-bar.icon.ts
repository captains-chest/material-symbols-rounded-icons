import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-android-cell-4-bar-icon',
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
  <path d="M60-220v-200q0-25 17.5-42.5T120-480q25 0 42.5 17.5T180-420v200q0 25-17.5 42.5T120-160q-25 0-42.5-17.5T60-220Zm240 0v-300q0-25 17.5-42.5T360-580q25 0 42.5 17.5T420-520v300q0 25-17.5 42.5T360-160q-25 0-42.5-17.5T300-220Zm240 0v-400q0-25 17.5-42.5T600-680q25 0 42.5 17.5T660-620v400q0 25-17.5 42.5T600-160q-25 0-42.5-17.5T540-220Zm240 0v-520q0-25 17.5-42.5T840-800q25 0 42.5 17.5T900-740v520q0 25-17.5 42.5T840-160q-25 0-42.5-17.5T780-220Z"/>
</svg>`,
})
export class MsrfAndroidCell4BarIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
