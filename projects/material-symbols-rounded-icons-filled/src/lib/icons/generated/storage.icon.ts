import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-storage-icon',
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
  <path d="M200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320h560q33 0 56.5 23.5T840-240q0 33-23.5 56.5T760-160H200Zm0-480q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720q0 33-23.5 56.5T760-640H200Zm0 240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560h560q33 0 56.5 23.5T840-480q0 33-23.5 56.5T760-400H200Zm40-280q17 0 28.5-11.5T280-720q0-17-11.5-28.5T240-760q-17 0-28.5 11.5T200-720q0 17 11.5 28.5T240-680Zm0 240q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm0 240q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Z"/>
</svg>`,
})
export class MsrfStorageIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
