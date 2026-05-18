import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-keyboard-tab-icon',
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
  <path d="M840-240q-17 0-28.5-11.5T800-280v-400q0-17 11.5-28.5T840-720q17 0 28.5 11.5T880-680v400q0 17-11.5 28.5T840-240ZM567-440H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h447L452-636q-11-11-11.5-27.5T452-692q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-268q-11 11-27.5 11T452-268q-12-12-12-28.5t12-28.5l115-115Z"/>
</svg>`,
})
export class MsrKeyboardTabIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
