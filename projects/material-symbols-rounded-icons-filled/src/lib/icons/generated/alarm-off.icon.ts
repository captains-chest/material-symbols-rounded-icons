import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-alarm-off-icon',
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
  <path d="M748-320 364-710q-18-19-13-43.5t29-32.5q23-8 48.5-11t51.5-3q74 0 139.5 28T734-694.5Q783-645 811.5-579T840-436q0 26-3.5 51T825-336q-8 24-33 29.5T748-320Zm-40-462q-11-11-11-28t11-28q11-11 28-11t28 11l114 114q11 11 11 28t-11 28q-11 11-28 11t-28-11L708-782ZM480-80q-74 0-139.5-28T226-184q-49-48-77.5-113T120-436q0-62 18.5-116.5T192-652l-34-34-20 20q-11 11-28 11t-28-11q-11-11-11-28t11-28l20-20-46-46q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11l-98-98q-45 33-99.5 51.5T480-80Z"/>
</svg>`,
})
export class MsrfAlarmOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
