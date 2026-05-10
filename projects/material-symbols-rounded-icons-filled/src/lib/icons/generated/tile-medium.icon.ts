import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-tile-medium-icon',
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
  <path d="M120-240v-160q0-17 11.5-28.5T160-440h240q17 0 28.5 11.5T440-400v160q0 17-11.5 28.5T400-200H160q-17 0-28.5-11.5T120-240Zm400 0v-160q0-17 11.5-28.5T560-440h240q17 0 28.5 11.5T840-400v160q0 17-11.5 28.5T800-200H560q-17 0-28.5-11.5T520-240ZM120-560v-160q0-17 11.5-28.5T160-760h640q17 0 28.5 11.5T840-720v160q0 17-11.5 28.5T800-520H160q-17 0-28.5-11.5T120-560Z"/>
</svg>`,
})
export class MsrfTileMediumIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
