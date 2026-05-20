import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-signal-cellular-alt-off-icon',
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
  <path d="M457.5-177.5Q440-195 440-220v-186L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84L560-286v66q0 25-17.5 42.5T500-160q-25 0-42.5-17.5ZM740-359q-23-1-41.5-16T680-419v-321q0-25 17.5-42.5T740-800q25 0 42.5 17.5T800-740v321q0 30-18.5 45.5T740-359Zm-437.5-23.5Q320-365 320-340v120q0 25-17.5 42.5T260-160q-25 0-42.5-17.5T200-220v-120q0-25 17.5-42.5T260-400q25 0 42.5 17.5Z"/>
</svg>`,
})
export class MsrfSignalCellularAltOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
