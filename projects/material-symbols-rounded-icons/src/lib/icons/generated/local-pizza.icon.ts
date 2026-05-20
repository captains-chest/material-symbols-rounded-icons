import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-local-pizza-icon',
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
  <path d="M480-840q88 0 179 30t161 84q16 12 24 29t8 35q0 11-3.5 22.5T838-617L547-180q-12 18-30 27t-37 9q-19 0-37-9t-30-27L122-617q-7-11-10-22t-3-22q0-18 8-35t24-29q70-53 160.5-84T480-840Zm0 80q-83 0-153 28t-139 70l292 438 292-438q-69-43-138.5-70.5T480-760ZM380-560q25 0 42.5-17.5T440-620q0-25-17.5-42.5T380-680q-25 0-42.5 17.5T320-620q0 25 17.5 42.5T380-560Zm100 200q25 0 42.5-17.5T540-420q0-25-17.5-42.5T480-480q-25 0-42.5 17.5T420-420q0 25 17.5 42.5T480-360Zm0 136Z"/>
</svg>`,
})
export class MsrLocalPizzaIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
