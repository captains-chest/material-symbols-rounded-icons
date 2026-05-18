import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-battery-android-question-icon',
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
  <path d="M440-330q13 0 22-9t9-22q0-13-9-22.5t-22-9.5q-13 0-22.5 9.5T408-361q0 13 9.5 22t22.5 9Zm-23-95h46q0-24 4-34t20-26q23-22 31-36t8-31q0-35-25-56.5T440-630q-32 0-54 16.5T354-568l41 17q5-17 17-27t29-10q17 0 28.5 10.5T481-549q0 10-5 18.5T455-508q-25 23-31.5 38t-6.5 45ZM160-210q-33 0-56.5-23.5T80-290v-380q0-33 23.5-56.5T160-750h560q33 0 56.5 23.5T800-670v90h20q25 0 42.5 17.5T880-520v80q0 26-17.5 43T820-380h-20v90q0 33-23.5 56.5T720-210H160Z"/>
</svg>`,
})
export class MsrfBatteryAndroidQuestionIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
