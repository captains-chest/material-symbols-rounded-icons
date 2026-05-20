import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-swipe-up-alt-icon',
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
  <path d="M480-160q-83 0-141.5-58.5T280-360q0-73 45.5-127.5T440-556v-171l-36 36q-11 11-27.5 11T348-692q-11-11-11-28t11-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q11 11 11 27.5T612-692q-12 12-28.5 12T555-692l-35-35v171q69 14 114.5 68.5T680-360q0 83-58.5 141.5T480-160Z"/>
</svg>`,
})
export class MsrfSwipeUpAltIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
