import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-signal-cellular-1-bar-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M177-80q-18 0-29.5-12T136-120q0-8 3-15t9-13l664-664q6-6 13-9t15-3q16 0 28 11.5t12 29.5v643q0 25-17.5 42.5T820-80H177Zm223-80h400v-526L400-286v126Z"/>
</svg>`,
})
export class MsrSignalCellular1BarIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
