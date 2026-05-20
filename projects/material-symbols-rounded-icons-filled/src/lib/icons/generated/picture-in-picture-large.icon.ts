import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-picture-in-picture-large-icon',
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
  <path d="M280-320q-17 0-28.5-11.5T240-360v-320q0-17 11.5-28.5T280-720h400q17 0 28.5 11.5T720-680v320q0 17-11.5 28.5T680-320H280ZM120-160q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240h680v-520q0-17 11.5-28.5T840-800q17 0 28.5 11.5T880-760v520q0 33-23.5 56.5T800-160H120Z"/>
</svg>`,
})
export class MsrfPictureInPictureLargeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
