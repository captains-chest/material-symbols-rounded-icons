import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-stacked-inbox-icon',
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
  <path d="M280-280q-33 0-56.5-23.5T200-360v-400q0-33 23.5-56.5T280-840h560q33 0 56.5 23.5T920-760v400q0 33-23.5 56.5T840-280H280Zm280-200q26 0 47-15.5t29-39.5q2-11 10-18t19-7h175v-200H280v200h175q11 0 19 7t10 18q8 24 29 39.5t47 15.5ZM120-120q-33 0-56.5-23.5T40-200v-440q0-17 11.5-28.5T80-680q17 0 28.5 11.5T120-640v440h600q17 0 28.5 11.5T760-160q0 17-11.5 28.5T720-120H120Z"/>
</svg>`,
})
export class MsrfStackedInboxIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
