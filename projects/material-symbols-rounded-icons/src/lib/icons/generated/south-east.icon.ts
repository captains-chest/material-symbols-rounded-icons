import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-south-east-icon',
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
  <path d="M624-280 188-716q-11-11-11-28t11-28q11-11 28-11t28 11l436 436v-224q0-17 11.5-28.5T720-600q17 0 28.5 11.5T760-560v320q0 17-11.5 28.5T720-200H400q-17 0-28.5-11.5T360-240q0-17 11.5-28.5T400-280h224Z"/>
</svg>`,
})
export class MsrSouthEastIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
