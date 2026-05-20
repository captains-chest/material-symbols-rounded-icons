import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-serif-icon',
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
  <path d="M280-253h-26l-6 7q0 2 6 6h92l6-6q0-3-1.5-5t-4.5-2h-45l53-147h134l50 147h-42l-6 7q0 2 6 6h210l6-6q0-3-1.5-5t-4.5-2h-25L515-703q-3-8-9.5-12.5T491-720h-19q-8 0-15 4.5T447-703L280-253Zm80-162 64-178 59 178H360ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Z"/>
</svg>`,
})
export class MsrfSerifIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
