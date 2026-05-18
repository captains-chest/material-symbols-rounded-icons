import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-health-metrics-icon',
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
  <path d="M360-80q-33 0-56.5-23.5T280-160v-120H160q-33 0-56.5-23.5T80-360v-80h258l68 102q5 8 14 13t19 5q13 0 24-8t15-20l54-162 34 52q6 8 15 13t19 5h280v80q0 33-23.5 56.5T800-280H680v120q0 33-23.5 56.5T600-80H360Zm68-370-35-52q-5-8-14-13t-19-5H80v-80q0-33 23.5-56.5T160-680h120v-120q0-33 23.5-56.5T360-880h240q33 0 56.5 23.5T680-800v120h120q33 0 56.5 23.5T880-600v80H621l-68-102q-5-8-14-13t-19-5q-13 0-23.5 8T482-612l-54 162Z"/>
</svg>`,
})
export class MsrfHealthMetricsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
