import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-backpack-icon',
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
  <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-56 34-98t86-56v-46q0-17 11.5-28.5T320-880h40q17 0 28.5 11.5T400-840v40h160v-40q0-17 11.5-28.5T600-880h40q17 0 28.5 11.5T680-840v46q52 14 86 56t34 98v480q0 33-23.5 56.5T720-80H240Zm340-320v40q0 17 11.5 28.5T620-320q17 0 28.5-11.5T660-360v-80q0-17-11.5-28.5T620-480H340q-17 0-28.5 11.5T300-440q0 17 11.5 28.5T340-400h240Z"/>
</svg>`,
})
export class MsrfBackpackIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
