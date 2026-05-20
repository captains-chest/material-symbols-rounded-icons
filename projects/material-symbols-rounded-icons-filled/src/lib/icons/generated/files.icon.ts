import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-files-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-120h360q33 0 56.5-23.5T520-440v-360h280q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160ZM80-400v-240q0-33 23.5-56.5T160-720h240L80-400Zm153-40 207-207v207H233Z"/>
</svg>`,
})
export class MsrfFilesIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
