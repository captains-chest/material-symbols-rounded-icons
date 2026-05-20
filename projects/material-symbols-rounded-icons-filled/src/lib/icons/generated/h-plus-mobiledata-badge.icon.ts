import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-h-plus-mobiledata-badge-icon',
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
  <path d="M120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm140-320h160v120q0 17 11.5 28.5T460-280q17 0 28.5-11.5T500-320v-320q0-17-11.5-28.5T460-680q-17 0-28.5 11.5T420-640v120H260v-120q0-17-11.5-28.5T220-680q-17 0-28.5 11.5T180-640v320q0 17 11.5 28.5T220-280q17 0 28.5-11.5T260-320v-120Zm360 0v40q0 17 11.5 28.5T660-360q17 0 28.5-11.5T700-400v-40h40q17 0 28.5-11.5T780-480q0-17-11.5-28.5T740-520h-40v-40q0-17-11.5-28.5T660-600q-17 0-28.5 11.5T620-560v40h-40q-17 0-28.5 11.5T540-480q0 17 11.5 28.5T580-440h40Z"/>
</svg>`,
})
export class MsrfHPlusMobiledataBadgeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
