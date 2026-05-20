import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-room-service-icon',
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
  <path d="M120-200q-17 0-28.5-11.5T80-240q0-17 11.5-28.5T120-280h720q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200H120Zm0-120v-40q0-128 78.5-226T400-710v-10q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720v10q124 26 202 124t78 226v40H120Z"/>
</svg>`,
})
export class MsrfRoomServiceIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
