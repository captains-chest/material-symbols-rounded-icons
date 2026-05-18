import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-attach-file-add-icon',
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
  <path d="M470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v260q0 17-11.5 28.5T540-400q-17 0-28.5-11.5T500-440v-260q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q17 0 32-3.5t29-8.5q16-6 31 .5t21 22.5q6 16-.5 31T560-97q-21 8-43.5 12.5T470-80Zm210-40q-17 0-28.5-11.5T640-160v-80h-80q-17 0-28.5-11.5T520-280q0-17 11.5-28.5T560-320h80v-80q0-17 11.5-28.5T680-440q17 0 28.5 11.5T720-400v80h80q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240h-80v80q0 17-11.5 28.5T680-120ZM400-280q-17 0-28.5-11.5T360-320v-360q0-17 11.5-28.5T400-720q17 0 28.5 11.5T440-680v360q0 17-11.5 28.5T400-280Zm280-240q-17 0-28.5-11.5T640-560v-120q0-17 11.5-28.5T680-720q17 0 28.5 11.5T720-680v120q0 17-11.5 28.5T680-520Z"/>
</svg>`,
})
export class MsrfAttachFileAddIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
