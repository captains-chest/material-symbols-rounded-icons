import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-view-day-icon',
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
  <path d="M159-160q-17 0-28-11.5T120-200q0-17 11.5-28.5T160-240h641q17 0 28 11.5t11 28.5q0 17-11.5 28.5T800-160H159Zm41-160q-33 0-56.5-23.5T120-400v-160q0-33 23.5-56.5T200-640h560q33 0 56.5 23.5T840-560v160q0 33-23.5 56.5T760-320H200Zm-41-400q-17 0-28-11.5T120-760q0-17 11.5-28.5T160-800h641q17 0 28 11.5t11 28.5q0 17-11.5 28.5T800-720H159Z"/>
</svg>`,
})
export class MsrfViewDayIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
