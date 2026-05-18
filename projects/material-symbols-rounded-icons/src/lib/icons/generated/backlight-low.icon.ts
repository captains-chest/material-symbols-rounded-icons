import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-backlight-low-icon',
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
  <path d="M120-360q-17 0-28.5-11.5T80-400q0-17 11.5-28.5T120-440h40q17 0 28.5 11.5T200-400q0 17-11.5 28.5T160-360h-40Zm162-238q-11 11-28 11t-28-11l-29-29q-11-11-11-28t11-28q11-11 28-11t28 11l29 29q11 11 11 28t-11 28Zm58 358q-25 0-42.5-17.5T280-300q0-25 17.5-42.5T340-360h280q25 0 42.5 17.5T680-300q0 25-17.5 42.5T620-240H340Zm140-440q-17 0-28.5-11.5T440-720v-40q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v40q0 17-11.5 28.5T480-680Zm198 82q-11-12-11.5-28t11.5-28l29-29q12-12 28-11.5t28 12.5q11 12 11.5 28T763-626l-29 29q-12 12-28 11.5T678-598Zm122 238q-17 0-28.5-11.5T760-400q0-17 11.5-28.5T800-440h40q17 0 28.5 11.5T880-400q0 17-11.5 28.5T840-360h-40Z"/>
</svg>`,
})
export class MsrBacklightLowIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
