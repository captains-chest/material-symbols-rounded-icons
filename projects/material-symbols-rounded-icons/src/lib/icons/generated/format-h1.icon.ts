import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-format-h1-icon',
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
  <path d="M240-280q-17 0-28.5-11.5T200-320v-320q0-17 11.5-28.5T240-680q17 0 28.5 11.5T280-640v120h160v-120q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v320q0 17-11.5 28.5T480-280q-17 0-28.5-11.5T440-320v-120H280v120q0 17-11.5 28.5T240-280Zm480 0q-17 0-28.5-11.5T680-320v-280h-40q-17 0-28.5-11.5T600-640q0-17 11.5-28.5T640-680h80q17 0 28.5 11.5T760-640v320q0 17-11.5 28.5T720-280Z"/>
</svg>`,
})
export class MsrFormatH1IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
