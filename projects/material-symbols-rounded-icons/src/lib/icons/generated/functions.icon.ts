import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-functions-icon',
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
  <path d="M500-480 253-708q-6-6-9.5-13.5T240-737v-23q0-17 11.5-28.5T280-800h380q25 0 42.5 17.5T720-740q0 25-17.5 42.5T660-680H431l184 171q13 12 13 29t-13 29L431-280h229q25 0 42.5 17.5T720-220q0 25-17.5 42.5T660-160H269q-12 0-20.5-8.5T240-189v-38q0-6 2-11.5t7-10.5l251-231Z"/>
</svg>`,
})
export class MsrFunctionsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
