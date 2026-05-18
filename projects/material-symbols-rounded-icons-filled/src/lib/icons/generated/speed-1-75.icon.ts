import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-speed-1-75-icon',
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
  <path d="M680-280q-17 0-28.5-11.5T640-320q0-17 11.5-28.5T680-360h120v-80H680q-17 0-28.5-11.5T640-480v-160q0-17 11.5-28.5T680-680h160q17 0 28.5 11.5T880-640q0 17-11.5 28.5T840-600H720v80h80q33 0 56.5 23.5T880-440v80q0 33-23.5 56.5T800-280H680ZM520-600H400q-17 0-28.5-11.5T360-640q0-17 11.5-28.5T400-680h130q29 0 49.5 21.5T600-608l-2 18-71 281q-3 13-13 21t-24 8q-19 0-31-15t-7-33l68-272ZM320-280q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360q17 0 28.5 11.5T360-320q0 17-11.5 28.5T320-280ZM160-600h-40q-17 0-28.5-11.5T80-640q0-17 11.5-28.5T120-680h80q17 0 28.5 11.5T240-640v320q0 17-11.5 28.5T200-280q-17 0-28.5-11.5T160-320v-280Z"/>
</svg>`,
})
export class MsrfSpeed175IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
