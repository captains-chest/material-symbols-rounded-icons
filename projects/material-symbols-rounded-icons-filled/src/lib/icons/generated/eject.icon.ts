import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-eject-icon',
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
  <path d="M240-280h480q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200H240q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280Zm15-142 192-288q6-9 14.5-13.5T480-728q10 0 18.5 4.5T513-710l192 288q14 20 2 41t-36 21H289q-24 0-36-21t2-41Z"/>
</svg>`,
})
export class MsrfEjectIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
