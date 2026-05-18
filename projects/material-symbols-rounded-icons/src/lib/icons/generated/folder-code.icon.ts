import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-folder-code-icon',
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
  <path d="M160-240v-480 520-40Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v160q0 17-11.5 28.5T840-440q-17 0-28.5-11.5T800-480v-160H447l-80-80H160v480h160q17 0 28.5 11.5T360-200q0 17-11.5 28.5T320-160H160Zm393-40 59 59q12 12 12 28t-12 28q-12 12-28.5 12T555-85l-87-87q-12-12-12-28t12-28l87-87q12-12 28.5-12t28.5 12q12 12 12 28t-12 28l-59 59Zm254 0-59-59q-12-12-12-28t12-28q12-12 28.5-12t28.5 12l87 87q12 12 12 28t-12 28l-87 87q-12 12-28.5 12T748-85q-12-12-12-28t12-28l59-59Z"/>
</svg>`,
})
export class MsrFolderCodeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
