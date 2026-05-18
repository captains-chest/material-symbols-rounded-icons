import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-align-stretch-icon',
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
  <path d="M320-560q-17 0-28.5-11.5T280-600v-200H120q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H680v200q0 17-11.5 28.5T640-560H320ZM120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h160v-200q0-17 11.5-28.5T320-400h320q17 0 28.5 11.5T680-360v200h160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Z"/>
</svg>`,
})
export class MsrAlignStretchIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
