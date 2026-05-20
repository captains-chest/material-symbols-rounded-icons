import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-format-size-icon',
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
  <path d="M560-680H420q-25 0-42.5-17.5T360-740q0-25 17.5-42.5T420-800h400q25 0 42.5 17.5T880-740q0 25-17.5 42.5T820-680H680v460q0 25-17.5 42.5T620-160q-25 0-42.5-17.5T560-220v-460ZM200-480h-60q-25 0-42.5-17.5T80-540q0-25 17.5-42.5T140-600h240q25 0 42.5 17.5T440-540q0 25-17.5 42.5T380-480h-60v260q0 25-17.5 42.5T260-160q-25 0-42.5-17.5T200-220v-260Z"/>
</svg>`,
})
export class MsrfFormatSizeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
