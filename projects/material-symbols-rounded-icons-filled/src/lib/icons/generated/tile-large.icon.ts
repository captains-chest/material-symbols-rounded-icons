import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-tile-large-icon',
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
  <path d="M120-160v-160q0-17 11.5-28.5T160-360h240q17 0 28.5 11.5T440-320v160q0 17-11.5 28.5T400-120H160q-17 0-28.5-11.5T120-160Zm400 0v-160q0-17 11.5-28.5T560-360h240q17 0 28.5 11.5T840-320v160q0 17-11.5 28.5T800-120H560q-17 0-28.5-11.5T520-160ZM120-480v-320q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800v320q0 17-11.5 28.5T800-440H160q-17 0-28.5-11.5T120-480Z"/>
</svg>`,
})
export class MsrfTileLargeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
