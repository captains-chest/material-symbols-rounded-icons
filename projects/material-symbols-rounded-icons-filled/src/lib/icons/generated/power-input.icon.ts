import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-power-input-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M120-360q-17 0-28.5-11.5T80-400q0-17 11.5-28.5T120-440h120q17 0 28.5 11.5T280-400q0 17-11.5 28.5T240-360H120Zm280 0q-17 0-28.5-11.5T360-400q0-17 11.5-28.5T400-440h120q17 0 28.5 11.5T560-400q0 17-11.5 28.5T520-360H400Zm280 0q-17 0-28.5-11.5T640-400q0-17 11.5-28.5T680-440h120q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360H680ZM120-520q-17 0-28.5-11.5T80-560q0-17 11.5-28.5T120-600h680q17 0 28.5 11.5T840-560q0 17-11.5 28.5T800-520H120Z"/>
</svg>`,
})
export class MsrfPowerInputIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
