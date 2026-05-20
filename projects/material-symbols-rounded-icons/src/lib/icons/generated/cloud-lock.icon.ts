import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-cloud-lock-icon',
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
  <path d="M480-380ZM260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q96 0 169.5 56T749-600q5 17-4.5 30T721-553q-14 4-29-3t-22-27q-20-60-72-98.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h260q17 0 28.5 11.5T560-200q0 17-11.5 28.5T520-160H260Zm420 0q-17 0-28.5-11.5T640-200v-120q0-17 11.5-28.5T680-360v-40q0-33 23.5-56.5T760-480q33 0 56.5 23.5T840-400v40q17 0 28.5 11.5T880-320v120q0 17-11.5 28.5T840-160H680Zm40-200h80v-40q0-17-11.5-28.5T760-440q-17 0-28.5 11.5T720-400v40Z"/>
</svg>`,
})
export class MsrCloudLockIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
