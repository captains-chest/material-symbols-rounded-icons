import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-pinboard-icon',
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
  <path d="M260-80q-17 0-28.5-11.5T220-120v-160H103q-23 0-34-20t0-40l71-126v-94h-20q-17 0-28.5-11.5T80-600q0-17 11.5-28.5T120-640h280q17 0 28.5 11.5T440-600q0 17-11.5 28.5T400-560h-20v94l71 126q11 20 0 40t-34 20H300v160q0 17-11.5 28.5T260-80Zm540-80H520q-17 0-28.5-11.5T480-200q0-17 11.5-28.5T520-240h280v-480H120q-17 0-28.5-11.5T80-760q0-17 11.5-28.5T120-800h680q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160ZM172-360h176l-48-84v-116h-80v116l-48 84Zm88 0Z"/>
</svg>`,
})
export class MsrPinboardIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
