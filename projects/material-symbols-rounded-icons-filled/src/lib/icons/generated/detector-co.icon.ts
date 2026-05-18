import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-detector-co-icon',
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
  <path d="M340-360q-25 0-42.5-17.5T280-420q0-25 17.5-42.5T340-480q25 0 42.5 17.5T400-420q0 25-17.5 42.5T340-360Zm140 120q-25 0-42.5-17.5T420-300q0-25 17.5-42.5T480-360q25 0 42.5 17.5T540-300q0 25-17.5 42.5T480-240ZM340-120q-25 0-42.5-17.5T280-180q0-25 17.5-42.5T340-240q25 0 42.5 17.5T400-180q0 25-17.5 42.5T340-120Zm280-240q-25 0-42.5-17.5T560-420q0-25 17.5-42.5T620-480q25 0 42.5 17.5T680-420q0 25-17.5 42.5T620-360Zm0 240q-25 0-42.5-17.5T560-180q0-25 17.5-42.5T620-240q25 0 42.5 17.5T680-180q0 25-17.5 42.5T620-120Zm140-120q-25 0-42.5-17.5T700-300q0-25 17.5-42.5T760-360q25 0 42.5 17.5T820-300q0 25-17.5 42.5T760-240Zm-560 0q-25 0-42.5-17.5T140-300q0-25 17.5-42.5T200-360q25 0 42.5 17.5T260-300q0 25-17.5 42.5T200-240Zm136-320q-26 0-47-15.5T260-616l-20-64h-40q-33 0-56.5-23.5T120-760v-40q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v40q0 33-23.5 56.5T760-680h-40l-26 68q-9 23-29 37.5T620-560H336Zm-12-120 12 40h288l12-40H324Z"/>
</svg>`,
})
export class MsrfDetectorCoIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
