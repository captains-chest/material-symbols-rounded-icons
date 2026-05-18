import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-crop-icon',
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
  <path d="M680-80v-120H280q-33 0-56.5-23.5T200-280v-400H80q-17 0-28.5-11.5T40-720q0-17 11.5-28.5T80-760h120v-120q0-17 11.5-28.5T240-920q17 0 28.5 11.5T280-880v600h600q17 0 28.5 11.5T920-240q0 17-11.5 28.5T880-200H760v120q0 17-11.5 28.5T720-40q-17 0-28.5-11.5T680-80Zm0-280v-320H360v-80h320q33 0 56.5 23.5T760-680v320h-80Z"/>
</svg>`,
})
export class MsrCropIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
