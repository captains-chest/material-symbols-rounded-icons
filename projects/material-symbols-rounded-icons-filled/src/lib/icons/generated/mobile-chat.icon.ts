import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-mobile-chat-icon',
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
  <path d="M720-640H560q-50 0-85 35t-35 85v320q0 27 14 46t35 28q21 9 45 5.5t43-22.5l56-57h87q17 0 28.5 11.5T760-160v40q0 33-23.5 56.5T680-40H280q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v160q0 17-11.5 28.5T720-640Zm120 360H600l-46 46q-5 5-11 5.5t-11-1.5q-5-2-8.5-6.5T520-248v-272q0-17 11.5-28.5T560-560h280q17 0 28.5 11.5T880-520v200q0 17-11.5 28.5T840-280ZM480-720q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/>
</svg>`,
})
export class MsrfMobileChatIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
