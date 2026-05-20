import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-arrow-menu-close-icon',
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
  <path d="M406-314 268-452q-12-12-12-28t12-28l138-138q10-10 22-5t12 19v304q0 14-12 19t-22-5Zm114 154v-640q0-17 11.5-28.5T560-840q17 0 28.5 11.5T600-800v640q0 17-11.5 28.5T560-120q-17 0-28.5-11.5T520-160Z"/>
</svg>`,
})
export class MsrfArrowMenuCloseIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
