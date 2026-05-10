import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-split-scene-up-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M240-80q-33 0-56.5-23.5T160-160v-160q0-17 11.5-28.5T200-360h560q17 0 28.5 11.5T800-320v160q0 33-23.5 56.5T720-80H240ZM120-440q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h40v-280q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v280h40q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H120Z"/>
</svg>`,
})
export class MsrfSplitSceneUpIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
