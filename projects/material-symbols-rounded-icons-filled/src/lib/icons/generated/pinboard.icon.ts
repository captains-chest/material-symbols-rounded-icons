import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-pinboard-icon',
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
  <path d="M260-80q-17 0-28.5-11.5T220-120v-160H103q-23 0-34-20t0-40l71-126v-94h-20q-17 0-28.5-11.5T80-600q0-17 11.5-28.5T120-640h280q17 0 28.5 11.5T440-600q0 17-11.5 28.5T400-560h-20v94l71 126q11 20 0 40t-34 20H300v160q0 17-11.5 28.5T260-80Zm540-80H520q-17 0-28.5-11.5T480-200q0-17 11.5-28.5T520-240h280v-480H120q-17 0-28.5-11.5T80-760q0-17 11.5-28.5T120-800h680q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Z"/>
</svg>`,
})
export class MsrfPinboardIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
