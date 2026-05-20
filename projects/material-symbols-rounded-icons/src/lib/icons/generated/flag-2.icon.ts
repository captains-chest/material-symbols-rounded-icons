import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-flag-2-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M280-440v320q0 17-11.5 28.5T240-80q-17 0-28.5-11.5T200-120v-680q0-17 11.5-28.5T240-840h541q11 0 19.5 5t13.5 13q5 8 6.5 17.5T818-785l-58 145 58 145q4 10 2.5 19.5T814-458q-5 8-13.5 13t-19.5 5H280Zm0-80h442l-36-90q-6-14-6-30t6-30l36-90H280v240Zm0 0v-240 240Z"/>
</svg>`,
})
export class MsrFlag2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
