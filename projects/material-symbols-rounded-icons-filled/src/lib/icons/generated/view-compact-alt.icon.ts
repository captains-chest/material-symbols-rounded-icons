import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-view-compact-alt-icon',
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
  <path d="M340-300h80q17 0 28.5-11.5T460-340v-80q0-17-11.5-28.5T420-460h-80q-17 0-28.5 11.5T300-420v80q0 17 11.5 28.5T340-300Zm0-200h80q17 0 28.5-11.5T460-540v-80q0-17-11.5-28.5T420-660h-80q-17 0-28.5 11.5T300-620v80q0 17 11.5 28.5T340-500Zm200 200h80q17 0 28.5-11.5T660-340v-80q0-17-11.5-28.5T620-460h-80q-17 0-28.5 11.5T500-420v80q0 17 11.5 28.5T540-300Zm0-200h80q17 0 28.5-11.5T660-540v-80q0-17-11.5-28.5T620-660h-80q-17 0-28.5 11.5T500-620v80q0 17 11.5 28.5T540-500ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
</svg>`,
})
export class MsrfViewCompactAltIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
