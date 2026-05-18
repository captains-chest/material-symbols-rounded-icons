import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-mobile-wrench-icon',
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
  <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v4q0 17-11.5 28.5T720-480q-17 0-28.5-11.5T680-520v-320H280v720h160q17 0 28.5 11.5T480-80q0 17-11.5 28.5T440-40H280Zm380-220q11-12 11.5-28.5T660-316l-42-41q-9-9-6.5-21.5T626-395q8-2 16.5-3t17.5-1q58 0 99 40.5t41 99.5q0 12-2 24t-7 23l60 60q12 12 12 28t-12 28l-28 28q-12 11-28 11.5T767-68l-60-60q-11 5-23 6.5t-24 1.5q-59 0-99.5-40.5T520-259q0-9 1-17.5t3-16.5q3-12 15.5-15t22.5 7l42 42q12 12 28 11.5t28-12.5ZM480-720q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720ZM280-120v-720 720Z"/>
</svg>`,
})
export class MsrMobileWrenchIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
