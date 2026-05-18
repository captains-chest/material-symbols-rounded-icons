import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-memory-alt-icon',
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
  <path d="M280-360q17 0 28.5-11.5T320-400v-160q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560v160q0 17 11.5 28.5T280-360Zm200 0q17 0 28.5-11.5T520-400v-160q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v160q0 17 11.5 28.5T480-360Zm200 0q17 0 28.5-11.5T720-400v-160q0-17-11.5-28.5T680-600q-17 0-28.5 11.5T640-560v160q0 17 11.5 28.5T680-360Zm-520 80h640v-400H160v400Zm0 0v-400 400Zm0 80q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h40v-40q0-17 11.5-28.5T240-840q17 0 28.5 11.5T280-800v40h160v-40q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800v40h160v-40q0-17 11.5-28.5T720-840q17 0 28.5 11.5T760-800v40h40q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200h-40v40q0 17-11.5 28.5T720-120q-17 0-28.5-11.5T680-160v-40H520v40q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160v-40H280v40q0 17-11.5 28.5T240-120q-17 0-28.5-11.5T200-160v-40h-40Z"/>
</svg>`,
})
export class MsrMemoryAltIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
