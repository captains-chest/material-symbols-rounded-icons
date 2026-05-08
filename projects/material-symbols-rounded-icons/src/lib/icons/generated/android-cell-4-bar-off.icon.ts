import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-android-cell-4-bar-off-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M600-160q-25 0-42.5-17.5T540-220v-96l-120-84v180q0 25-17.5 42.5T360-160q-25 0-42.5-17.5T300-220v-264L70-645q-17-12-20.5-32t8.5-37q12-17 32.5-21t37.5 8l704 494q17 12 21 32t-8 37q-12 17-32.5 20.5T775-152l-115-80v12q0 25-17.5 42.5T600-160Zm300-148-120-84v-348q0-25 17.5-42.5T840-800q25 0 42.5 17.5T900-740v432ZM60-220v-200q0-25 17.5-42.5T120-480q25 0 42.5 17.5T180-420v200q0 25-17.5 42.5T120-160q-25 0-42.5-17.5T60-220Zm600-256-120-84v-60q0-25 17.5-42.5T600-680q25 0 42.5 17.5T660-620v144Z"/>
</svg>`,
})
export class MsrAndroidCell4BarOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
