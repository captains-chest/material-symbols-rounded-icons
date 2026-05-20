import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-nest-protect-icon',
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
  <path d="M320-120q-84 0-142-58t-58-142v-320q0-84 58-142t142-58h320q84 0 142 58t58 142v320q0 84-58 142t-142 58H320Zm0-80h320q51 0 85.5-34.5T760-320v-320q0-51-34.5-85.5T640-760H320q-51 0-85.5 34.5T200-640v320q0 51 34.5 85.5T320-200Zm160-80q-84 0-142-58t-58-142q0-84 58-142t142-58q84 0 142 58t58 142q0 84-58 142t-142 58Zm0-80q51 0 85.5-34.5T600-480q0-51-34.5-85.5T480-600q-51 0-85.5 34.5T360-480q0 51 34.5 85.5T480-360Z"/>
</svg>`,
})
export class MsrNestProtectIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
