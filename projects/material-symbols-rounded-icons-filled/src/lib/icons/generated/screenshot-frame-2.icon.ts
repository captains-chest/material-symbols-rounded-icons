import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-screenshot-frame-2-icon',
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
  <path d="M840-560q-17 0-28.5-11.5T800-600v-80h-80q-17 0-28.5-11.5T680-720q0-17 11.5-28.5T720-760h80q33 0 56.5 23.5T880-680v80q0 17-11.5 28.5T840-560Zm-720 0q-17 0-28.5-11.5T80-600v-80q0-33 23.5-56.5T160-760h80q17 0 28.5 11.5T280-720q0 17-11.5 28.5T240-680h-80v80q0 17-11.5 28.5T120-560Zm600 360q-17 0-28.5-11.5T680-240q0-17 11.5-28.5T720-280h80v-80q0-17 11.5-28.5T840-400q17 0 28.5 11.5T880-360v80q0 33-23.5 56.5T800-200h-80Zm-560 0q-33 0-56.5-23.5T80-280v-80q0-17 11.5-28.5T120-400q17 0 28.5 11.5T160-360v80h80q17 0 28.5 11.5T280-240q0 17-11.5 28.5T240-200h-80Z"/>
</svg>`,
})
export class MsrfScreenshotFrame2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
