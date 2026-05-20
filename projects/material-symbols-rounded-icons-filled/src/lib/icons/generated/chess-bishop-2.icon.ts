import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-chess-bishop-2-icon',
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
  <path d="M240-240q-41-51-60.5-118T160-513q0-74 65-149.5T409-804q-5-8-7-17.5t-2-18.5q0-33 23.5-56.5T480-920q33 0 56.5 23.5T560-840q0 8-2 16.5t-6 16.5q125 66 186.5 139.5T800-513q0 97-18.5 161T720-240H240ZM220-80q-25 0-42.5-17.5T160-140q0-25 17.5-42.5T220-200h520q25 0 42.5 17.5T800-140q0 25-17.5 42.5T740-80H220Zm220-400v40q0 17 11.5 28.5T480-400q17 0 28.5-11.5T520-440v-40h40q17 0 28.5-11.5T600-520q0-17-11.5-28.5T560-560h-40v-40q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600v40h-40q-17 0-28.5 11.5T360-520q0 17 11.5 28.5T400-480h40Z"/>
</svg>`,
})
export class MsrfChessBishop2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
