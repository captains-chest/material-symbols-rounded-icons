import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-media-output-off-icon',
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
  <path d="M480-80q-33 0-56.5-23.5T400-160v-160q0-51 19-94.5t51-75.5l43 43q-25 25-39 57t-14 70v40h60q17 0 28.5 11.5T560-240v120q0 17-11.5 28.5T520-80h-40Zm400-114-60-60v-66q0-75-52.5-127.5T640-500q-15 0-29 2t-28 7l-46-46q23-11 49-17t54-6q100 0 170 70t70 170v126ZM323-363q-19-5-31-21t-12-36q0-25 17.5-42.5T340-480q5 0 10 1t10 3q-14 26-23.5 54T323-363Zm155-233L194-880h326q33 0 56.5 23.5T600-800v162q-33 4-63.5 15T478-596ZM160-160q-33 0-56.5-23.5T80-240v-603h37l296 296-2.5 2.5q-.5.5-1.5 2.5-15-9-32.5-13.5T340-560q-58 0-99 41t-41 99q0 54 34.5 92.5T320-281v121H160ZM792-56 56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11Z"/>
</svg>`,
})
export class MsrfMediaOutputOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
