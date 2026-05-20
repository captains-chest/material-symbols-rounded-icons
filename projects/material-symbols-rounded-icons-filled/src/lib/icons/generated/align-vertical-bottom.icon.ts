import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-align-vertical-bottom-icon',
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
  <path d="M120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h720q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm220-160q-25 0-42.5-17.5T280-300v-520q0-25 17.5-42.5T340-880q25 0 42.5 17.5T400-820v520q0 25-17.5 42.5T340-240Zm280 0q-25 0-42.5-17.5T560-300v-280q0-25 17.5-42.5T620-640q25 0 42.5 17.5T680-580v280q0 25-17.5 42.5T620-240Z"/>
</svg>`,
})
export class MsrfAlignVerticalBottomIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
