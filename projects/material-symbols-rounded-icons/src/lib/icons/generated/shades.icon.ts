import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-shades-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M157-80q-17 0-27-10t-10-30v-680q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800v680q-1 20-11 30t-27 10q-77 0-144-66t-87-134H388q-20 68-87 134T157-80Zm43-96q54-24 87-74t33-110v-440H200v624Zm200-184h160v-440H400v440Zm360 184v-624H640v440q0 60 32 110.5t88 73.5ZM320-800H200h120Zm440 0H640h120Z"/>
</svg>`,
})
export class MsrShadesIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
