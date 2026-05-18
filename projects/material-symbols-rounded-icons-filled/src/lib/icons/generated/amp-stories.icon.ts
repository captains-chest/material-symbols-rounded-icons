import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-amp-stories-icon',
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
  <path d="M320-160q-17 0-28.5-11.5T280-200v-560q0-17 11.5-28.5T320-800h320q17 0 28.5 11.5T680-760v560q0 17-11.5 28.5T640-160H320ZM120-280v-401q0-17 11.5-28t28.5-11q17 0 28.5 11.5T200-680v401q0 17-11.5 28T160-240q-17 0-28.5-11.5T120-280Zm640 0v-401q0-17 11.5-28t28.5-11q17 0 28.5 11.5T840-680v401q0 17-11.5 28T800-240q-17 0-28.5-11.5T760-280Z"/>
</svg>`,
})
export class MsrfAmpStoriesIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
