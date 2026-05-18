import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-android-cell-4-bar-off-icon',
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
  <path d="M600-160q-25 0-42.5-17.5T540-220v-96l-120-84v180q0 25-17.5 42.5T360-160q-25 0-42.5-17.5T300-220v-264L70-645q-17-12-20.5-32t8.5-37q12-17 32.5-21t37.5 8l704 494q17 12 21 32t-8 37q-12 17-32.5 20.5T775-152l-115-80v12q0 25-17.5 42.5T600-160Zm300-148-120-84v-348q0-25 17.5-42.5T840-800q25 0 42.5 17.5T900-740v432ZM60-220v-200q0-25 17.5-42.5T120-480q25 0 42.5 17.5T180-420v200q0 25-17.5 42.5T120-160q-25 0-42.5-17.5T60-220Zm600-256-120-84v-60q0-25 17.5-42.5T600-680q25 0 42.5 17.5T660-620v144Z"/>
</svg>`,
})
export class MsrfAndroidCell4BarOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
