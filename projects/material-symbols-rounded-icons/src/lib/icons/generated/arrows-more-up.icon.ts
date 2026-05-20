import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-arrows-more-up-icon',
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
  <path d="M520-200q-17 0-28.5-11.5T480-240v-320H160q-17 0-28.5-11.5T120-600q0-17 11.5-28.5T160-640h360q17 0 28.5 11.5T560-600v360q0 17-11.5 28.5T520-200Zm200-200q-17 0-28.5-11.5T680-440v-320H360q-17 0-28.5-11.5T320-800q0-17 11.5-28.5T360-840h360q17 0 28.5 11.5T760-800v360q0 17-11.5 28.5T720-400Z"/>
</svg>`,
})
export class MsrArrowsMoreUpIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
