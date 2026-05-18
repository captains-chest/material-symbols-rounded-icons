import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-inbox-text-asterisk-icon',
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
  <path d="m720-212-38 53q-10 14-26 16t-30-8q-14-10-16.5-25.5T617-206l38-53-62-20q-16-5-23-19.5t-2-30.5q5-16 19.5-23.5T618-355l62 20v-65q0-17 11.5-28.5T720-440q17 0 28.5 11.5T760-400v65l62-20q16-5 30.5 2.5T872-329q5 16-2.5 30.5T846-279l-61 20 38 53q10 14 7.5 29.5T814-151q-14 10-30 8t-26-16l-38-53Zm-520 92q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v161q0 17-11.5 28T800-560q-17 0-28.5-11.5T760-600v-160H200v360h142q11 0 20.5 5.5T377-380q9 15 21.5 27.5T427-332q8 4 12 11.5t3 15.5q-3 32 1 63.5t15 61.5q8 22-2 41t-30 19H200Zm120-490h320q17 0 28.5-11.5T680-650q0-17-11.5-28.5T640-690H320q-17 0-28.5 11.5T280-650q0 17 11.5 28.5T320-610Zm0 140h224q17 0 28.5-11.5T584-510q0-17-11.5-28.5T544-550H320q-17 0-28.5 11.5T280-510q0 17 11.5 28.5T320-470Z"/>
</svg>`,
})
export class MsrfInboxTextAsteriskIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
