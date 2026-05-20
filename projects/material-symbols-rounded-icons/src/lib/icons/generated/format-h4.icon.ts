import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-format-h4-icon',
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
  <path d="M160-280q-17 0-28.5-11.5T120-320v-320q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640v120h160v-120q0-17 11.5-28.5T400-680q17 0 28.5 11.5T440-640v320q0 17-11.5 28.5T400-280q-17 0-28.5-11.5T360-320v-120H200v120q0 17-11.5 28.5T160-280Zm600 0q-17 0-28.5-11.5T720-320v-80H560q-17 0-28.5-11.5T520-440v-200q0-17 11.5-28.5T560-680q17 0 28.5 11.5T600-640v160h120v-160q0-17 11.5-28.5T760-680q17 0 28.5 11.5T800-640v160h40q17 0 28.5 11.5T880-440q0 17-11.5 28.5T840-400h-40v80q0 17-11.5 28.5T760-280Z"/>
</svg>`,
})
export class MsrFormatH4IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
