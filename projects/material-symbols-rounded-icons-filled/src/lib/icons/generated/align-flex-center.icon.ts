import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-align-flex-center-icon',
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
  <path d="M480-80q-17 0-28.5-11.5T440-120v-300H160q-17 0-28.5-11.5T120-460v-40q0-17 11.5-28.5T160-540h280v-300q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v300h280q17 0 28.5 11.5T840-500v40q0 17-11.5 28.5T800-420H520v300q0 17-11.5 28.5T480-80Z"/>
</svg>`,
})
export class MsrfAlignFlexCenterIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
