import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-ward-icon',
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
  <path d="M200-80q-17 0-28.5-11.5T160-120v-680h-40q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h80q17 0 28.5 11.5T240-840v720q0 17-11.5 28.5T200-80Zm160 0q-33 0-56.5-23.5T280-160v-640q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H360Zm0-459q18-11 38-16t42-5h200q22 0 42 5t38 16v-261H360v261Zm180-61q-33 0-56.5-23.5T460-680q0-33 23.5-56.5T540-760q33 0 56.5 23.5T620-680q0 33-23.5 56.5T540-600Zm-40 320v40q0 17 11.5 28.5T540-200q17 0 28.5-11.5T580-240v-40h40q17 0 28.5-11.5T660-320q0-17-11.5-28.5T620-360h-40v-40q0-17-11.5-28.5T540-440q-17 0-28.5 11.5T500-400v40h-40q-17 0-28.5 11.5T420-320q0 17 11.5 28.5T460-280h40Z"/>
</svg>`,
})
export class MsrfWardIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
