import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-arrows-left-right-circle-icon',
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
  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-72-268q11-11 11-28t-11-28l-36-36h216l-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L608-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H372l36-36q11-11 11-28t-11-28q-11-11-28-11t-28 11L248-508q-12 12-12 28t12 28l104 104q11 11 28 11t28-11Z"/>
</svg>`,
})
export class MsrfArrowsLeftRightCircleIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
