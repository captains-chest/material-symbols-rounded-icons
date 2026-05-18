import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-format-textdirection-r-to-l-icon',
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
  <path d="M440-800v400q0 17-11.5 28.5T400-360q-17 0-28.5-11.5T360-400v-160q-66 0-113-47t-47-113q0-66 47-113t113-47h280q17 0 28.5 11.5T680-840q0 17-11.5 28.5T640-800h-40v400q0 17-11.5 28.5T560-360q-17 0-28.5-11.5T520-400v-400h-80ZM272-200l36 36q11 11 11 28t-11 28q-11 11-28 11t-28-11L148-212q-12-12-12-28t12-28l104-104q11-11 28-11t28 11q11 11 11 28t-11 28l-36 36h528q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H272Z"/>
</svg>`,
})
export class MsrfFormatTextdirectionRToLIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
