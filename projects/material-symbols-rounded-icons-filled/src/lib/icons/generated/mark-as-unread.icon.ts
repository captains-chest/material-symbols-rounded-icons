import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-mark-as-unread-icon',
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
  <path d="M160-280q-33 0-56.5-23.5T80-360v-314q0-15 8.5-29.5T112-726l272-136q17-8 36-8.5t36 8.5l266 136q12 6 20.5 19t11.5 27H637L420-790 160-661v381Zm120 160q-33 0-56.5-23.5T200-200v-360q0-33 23.5-56.5T280-640h520q33 0 56.5 23.5T880-560v360q0 33-23.5 56.5T800-120H280Zm260-236q10 0 19.5-2t17.5-7l204-105q9-5 14-13.5t5-18.5q0-20-17-30t-35-1L540-426 332-533q-18-9-35 1t-17 30q0 10 5 18.5t14 13.5l204 105q8 5 17.5 7t19.5 2Z"/>
</svg>`,
})
export class MsrfMarkAsUnreadIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
