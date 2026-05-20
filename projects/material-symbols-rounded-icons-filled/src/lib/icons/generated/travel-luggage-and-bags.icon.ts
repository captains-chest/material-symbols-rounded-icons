import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-travel-luggage-and-bags-icon',
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
  <path d="M440-720h80v-80h-80v80Zm40 240q-76 0-145-31.5T200-582v-58q0-33 23.5-56.5T280-720h80v-120q0-17 11.5-28.5T400-880h160q17 0 28.5 11.5T600-840v120h80q33 0 56.5 23.5T760-640v58q-66 39-135 70.5T480-480ZM280-120q-33 0-56.5-23.5T200-200v-292q56 34 115.5 58T440-402v2q0 17 11.5 28.5T480-360q17 0 28.5-11.5T520-400v-2q65-8 124.5-32T760-492v292q0 33-23.5 56.5T680-120q0 17-11.5 28.5T640-80q-16 0-22.5-14.5T600-120H360q0 17-11.5 28.5T320-80q-16 0-22.5-14.5T280-120Z"/>
</svg>`,
})
export class MsrfTravelLuggageAndBagsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
