import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-connecting-airports-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="m776-320 18 60q2 8-2.5 14t-12.5 6h-11q-4 0-7.5-1.5T755-246l-25-34H616l45 152q3 9-2.5 16.5T643-104h-8q-5 0-9.5-2t-6.5-7l-99-167H400q-17 0-28.5-11.5T360-320q0-17 11.5-28.5T400-360h120l98-166q3-5 8-7.5t10-2.5h4q11 0 17 8t3 19l-44 149h114l24-32q3-4 7-6t9-2h4q10 0 16 8t3 17l-17 55ZM184-640l-18-60q-2-8 2.5-14t12.5-6h11q4 0 7.5 1.5t5.5 4.5l25 34h114l-45-152q-3-9 2.5-16.5T317-856h8q5 0 9.5 2t6.5 7l99 167h120q17 0 28.5 11.5T600-640q0 17-11.5 28.5T560-600H440l-98 166q-3 5-7.5 7.5T325-424h-8q-8 0-14-8t-3-19l44-149H230l-24 32q-3 4-7 6t-9 2h-4q-10 0-16-8t-3-17l17-55Z"/>
</svg>`,
})
export class MsrConnectingAirportsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
