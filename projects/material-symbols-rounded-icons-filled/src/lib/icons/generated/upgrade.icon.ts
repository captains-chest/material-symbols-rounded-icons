import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-upgrade-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M320-160q-17 0-28.5-11.5T280-200q0-17 11.5-28.5T320-240h320q17 0 28.5 11.5T680-200q0 17-11.5 28.5T640-160H320Zm160-160q-17 0-28.5-11.5T440-360v-287l-76 75q-11 11-27.5 11.5T308-572q-11-11-11-28t11-28l144-144q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l144 144q11 11 11.5 27.5T652-572q-11 11-28 11t-28-11l-76-75v287q0 17-11.5 28.5T480-320Z"/>
</svg>`,
})
export class MsrfUpgradeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
