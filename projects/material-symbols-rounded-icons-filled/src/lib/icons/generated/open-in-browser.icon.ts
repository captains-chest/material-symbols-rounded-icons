import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-open-in-browser-icon',
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
  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H640q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200h120v-480H200v480h120q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120H200Zm240-40v-206l-35 35q-12 12-28.5 11.5T348-332q-11-12-11.5-28t11.5-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q12 12 11.5 28T612-332q-12 12-28.5 12.5T555-331l-35-35v206q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160Z"/>
</svg>`,
})
export class MsrfOpenInBrowserIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
