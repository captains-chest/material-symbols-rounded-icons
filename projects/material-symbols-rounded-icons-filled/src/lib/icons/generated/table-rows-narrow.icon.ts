import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-table-rows-narrow-icon',
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
  <path d="M160-340q-17 0-28.5-11.5T120-380v-20q0-17 11.5-28.5T160-440h640q17 0 28.5 11.5T840-400v20q0 17-11.5 28.5T800-340H160Zm0-180q-17 0-28.5-11.5T120-560v-20q0-17 11.5-28.5T160-620h640q17 0 28.5 11.5T840-580v20q0 17-11.5 28.5T800-520H160Zm0-180q-17 0-28.5-11.5T120-740v-20q0-17 11.5-28.5T160-800h640q17 0 28.5 11.5T840-760v20q0 17-11.5 28.5T800-700H160Zm0 540q-17 0-28.5-11.5T120-200v-20q0-17 11.5-28.5T160-260h640q17 0 28.5 11.5T840-220v20q0 17-11.5 28.5T800-160H160Z"/>
</svg>`,
})
export class MsrfTableRowsNarrowIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
