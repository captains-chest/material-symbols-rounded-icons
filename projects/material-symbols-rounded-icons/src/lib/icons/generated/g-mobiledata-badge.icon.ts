import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-g-mobiledata-badge-icon',
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
  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm200 480h160q33 0 56.5-23.5T640-360v-120q0-17-11.5-28.5T600-520h-80q-17 0-28.5 11.5T480-480q0 17 11.5 28.5T520-440h40v80H400v-240h240q0-33-23.5-56.5T560-680H400q-33 0-56.5 23.5T320-600v240q0 33 23.5 56.5T400-280Z"/>
</svg>`,
})
export class MsrGMobiledataBadgeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
