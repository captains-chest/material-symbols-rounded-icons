import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-falling-icon',
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
  <path d="m492-248-121-90q-11-8-19-20.5T341-385l-45-199-88 76 24 112q4 17-5.5 31T200-348q-17 3-31-6t-17-26l-23-111q-5-21 2-41.5t23-34.5l144-128q23-20 54.5-16.5T413-696q32 14 66.5 20t69.5 1q24-4 46-14t42-24q14-10 30.5-8.5T695-707q11 13 8.5 29.5T687-651q-23 16-47 28.5T589-602q-33 9-66.5 9.5T456-600l28 124 115-22q16-3 31.5.5T660-484l147 104q14 10 16.5 26.5T815-323q-10 13-25.5 15.5T760-314l-140-98-144 28 68 50q18 14 26.5 35t4.5 44l-28 154q-3 17-17 26.5T499-68q-17-3-26-17t-6-31l25-132ZM320-740q-33 0-56.5-23.5T240-820q0-33 23.5-56.5T320-900q33 0 56.5 23.5T400-820q0 33-23.5 56.5T320-740Z"/>
</svg>`,
})
export class MsrFallingIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
