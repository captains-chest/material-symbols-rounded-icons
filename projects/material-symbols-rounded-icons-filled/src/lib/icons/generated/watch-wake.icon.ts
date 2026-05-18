import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-watch-wake-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M800-280q-17 0-28.5-11.5T760-320q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280Zm40-160h-40q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h40q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440Zm40-160h-80q-17 0-28.5-11.5T760-640q0-17 11.5-29t28.5-12h80q17 0 28.5 12t11.5 29q0 17-11.5 28.5T880-600ZM310-80q-14 0-24-8t-14-21l-46-153q-48-38-77-95t-29-123q0-66 29-123t77-95l46-153q4-13 14-21t24-8h180q14 0 24 8t14 21l46 153q48 38 77 95t29 123q0 66-29 123t-77 95l-46 153q-4 13-14 21t-24 8H310Zm90-200q83 0 141.5-58.5T600-480q0-83-58.5-141.5T400-680q-83 0-141.5 58.5T200-480q0 83 58.5 141.5T400-280Z"/>
</svg>`,
})
export class MsrfWatchWakeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
