import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-empty-dashboard-icon',
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
  <path d="M280-240h140q17 0 28.5-11.5T460-280v-80q0-17-11.5-28.5T420-400H280q-17 0-28.5 11.5T240-360v80q0 17 11.5 28.5T280-240Zm0-200h140q17 0 28.5-11.5T460-480v-200q0-17-11.5-28.5T420-720H280q-17 0-28.5 11.5T240-680v200q0 17 11.5 28.5T280-440Zm260 200h140q17 0 28.5-11.5T720-280v-200q0-17-11.5-28.5T680-520H540q-17 0-28.5 11.5T500-480v200q0 17 11.5 28.5T540-240Zm0-320h140q17 0 28.5-11.5T720-600v-80q0-17-11.5-28.5T680-720H540q-17 0-28.5 11.5T500-680v80q0 17 11.5 28.5T540-560ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v80h40q17 0 28.5 11.5T920-640q0 17-11.5 28.5T880-600h-40v80h40q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-40v80h40q17 0 28.5 11.5T920-320q0 17-11.5 28.5T880-280h-40v80q0 33-23.5 56.5T760-120H200Z"/>
</svg>`,
})
export class MsrfEmptyDashboardIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
