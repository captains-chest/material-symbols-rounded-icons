import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-amp-stories-icon',
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
  <path d="M320-160q-17 0-28.5-11.5T280-200v-560q0-17 11.5-28.5T320-800h320q17 0 28.5 11.5T680-760v560q0 17-11.5 28.5T640-160H320ZM120-280v-401q0-17 11.5-28t28.5-11q17 0 28.5 11.5T200-680v401q0 17-11.5 28T160-240q-17 0-28.5-11.5T120-280Zm640 0v-401q0-17 11.5-28t28.5-11q17 0 28.5 11.5T840-680v401q0 17-11.5 28T800-240q-17 0-28.5-11.5T760-280Zm-400 40h240v-480H360v480Zm0 0v-480 480Z"/>
</svg>`,
})
export class MsrAmpStoriesIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
