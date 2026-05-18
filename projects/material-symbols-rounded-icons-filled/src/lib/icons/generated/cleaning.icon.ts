import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-cleaning-icon',
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
  <path d="M480-720v-40l-75 75q-1 1-16 5-10 0-15.5-8.5T373-706l27-54v-40q-17 0-28.5-11.5T360-840q0-17 11.5-28.5T400-880h200q17 0 28.5 11.5T640-840v31q0 5-1 8.5t-3 8.5l-36 72H480ZM400-80q-33 0-56.5-23.5T320-160v-197q0-10 2-19.5t7-18.5l128-242q11-20 29.5-31.5T528-680h72q17 0 28.5 11.5T640-640v480q0 33-23.5 56.5T560-80H400Z"/>
</svg>`,
})
export class MsrfCleaningIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
