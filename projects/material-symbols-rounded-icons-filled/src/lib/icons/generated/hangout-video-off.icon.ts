import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-hangout-video-off-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l24 24v112L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11.5 27.5T848-56q-11 11-28 11t-28-11L686-160H160Zm710-44L720-354v-224q0-19-17-27t-32 3l-111 88v-84q0-17-11.5-28.5T520-638h-84L274-800h526q33 0 56.5 23.5T880-720v480q0 9-2.5 18t-7.5 18ZM280-320h246L240-606v246q0 17 11.5 28.5T280-320Z"/>
</svg>`,
})
export class MsrfHangoutVideoOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
