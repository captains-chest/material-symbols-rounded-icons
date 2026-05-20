import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-tour-icon',
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
  <path d="M280-400v280q0 17-11.5 28.5T240-80q-17 0-28.5-11.5T200-120v-720q0-17 11.5-28.5T240-880q17 0 28.5 11.5T280-840v40h501q21 0 33 17.5t4 37.5l-58 145 58 145q8 20-4 37.5T781-400H280Zm0-320v240-240Zm220 200q33 0 56.5-23.5T580-600q0-33-23.5-56.5T500-680q-33 0-56.5 23.5T420-600q0 33 23.5 56.5T500-520Zm-220 40h442l-48-120 48-120H280v240Z"/>
</svg>`,
})
export class MsrTourIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
