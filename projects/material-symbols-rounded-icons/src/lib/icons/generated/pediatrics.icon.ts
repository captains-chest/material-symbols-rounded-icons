import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-pediatrics-icon',
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
  <path d="M320-680q-17 0-28.5-11.5T280-720q0-17 11.5-28.5T320-760h120v-80q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v80h120q17 0 28.5 11.5T680-720q0 17-11.5 28.5T640-680H320Zm40 600q-33 0-56.5-23.5T280-160v-360q0-50 35-85t85-35h160q50 0 85 35t35 85v360q0 33-23.5 56.5T600-80H360Zm0-80h240v-360q0-17-11.5-28.5T560-560H400q-17 0-28.5 11.5T360-520v40h80q17 0 28.5 11.5T480-440q0 17-11.5 28.5T440-400h-80v80h80q17 0 28.5 11.5T480-280q0 17-11.5 28.5T440-240h-80v80Zm0 0v-400 400Z"/>
</svg>`,
})
export class MsrPediatricsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
