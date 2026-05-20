import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-table-rows-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M160-120q-17 0-28.5-11.5T120-160v-106q0-17 11.5-28.5T160-306h640q17 0 28.5 11.5T840-266v106q0 17-11.5 28.5T800-120H160Zm0-266q-17 0-28.5-11.5T120-426v-109q0-17 11.5-28.5T160-575h640q17 0 28.5 11.5T840-535v109q0 17-11.5 28.5T800-386H160Zm0-269q-17 0-28.5-11.5T120-695v-105q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800v105q0 17-11.5 28.5T800-655H160Z"/>
</svg>`,
})
export class MsrfTableRowsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
