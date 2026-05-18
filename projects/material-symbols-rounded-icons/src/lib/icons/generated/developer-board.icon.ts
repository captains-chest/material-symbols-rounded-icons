import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-developer-board-icon',
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
  <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v80h40q17 0 28.5 11.5T880-640q0 17-11.5 28.5T840-600h-40v80h40q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-40v80h40q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280h-40v80q0 33-23.5 56.5T720-120H160Zm0-80h560v-560H160v560Zm120-80h120q17 0 28.5-11.5T440-320v-80q0-17-11.5-28.5T400-440H280q-17 0-28.5 11.5T240-400v80q0 17 11.5 28.5T280-280Zm240-280h80q17 0 28.5-11.5T640-600v-40q0-17-11.5-28.5T600-680h-80q-17 0-28.5 11.5T480-640v40q0 17 11.5 28.5T520-560Zm-240 80h120q17 0 28.5-11.5T440-520v-120q0-17-11.5-28.5T400-680H280q-17 0-28.5 11.5T240-640v120q0 17 11.5 28.5T280-480Zm240 200h80q17 0 28.5-11.5T640-320v-160q0-17-11.5-28.5T600-520h-80q-17 0-28.5 11.5T480-480v160q0 17 11.5 28.5T520-280ZM160-760v560-560Z"/>
</svg>`,
})
export class MsrDeveloperBoardIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
