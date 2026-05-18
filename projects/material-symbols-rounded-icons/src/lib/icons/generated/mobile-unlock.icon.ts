import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-mobile-unlock-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M380-320h160q17 0 28.5-11.5T580-360v-120q0-17-11.5-28.5T540-520h-20v-40q0-17 11.5-28.5T560-600q17 0 28.5 11.5T600-560v20q0 8 6 14t14 6q8 0 14-6t6-14v-20q0-33-23.5-56.5T560-640q-33 0-56.5 23.5T480-560v40H380q-17 0-28.5 11.5T340-480v120q0 17 11.5 28.5T380-320ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm0-80h400v-720H280v720Zm0 0v-720 720Z"/>
</svg>`,
})
export class MsrMobileUnlockIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
