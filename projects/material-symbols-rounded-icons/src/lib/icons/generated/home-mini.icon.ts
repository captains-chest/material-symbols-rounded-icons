import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-home-mini-icon',
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
  <path d="M360-200q-116 0-198-82T80-480q0-38 18.5-86t64.5-91.5q46-43.5 123-73T480-760q117 0 194 29.5t123 73q46 43.5 64.5 91.5t18.5 86q0 116-82 198t-198 82H360Zm6-80h228q63 0 114.5-33.5T784-400H176q24 53 75.5 86.5T366-280Zm114-120Zm0-40Zm-320-40h640q0-30-16-65t-53.5-65q-37.5-30-99-50T480-680q-90 0-151 20t-98.5 50q-37.5 30-54 65T160-480Zm320 0Z"/>
</svg>`,
})
export class MsrHomeMiniIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
