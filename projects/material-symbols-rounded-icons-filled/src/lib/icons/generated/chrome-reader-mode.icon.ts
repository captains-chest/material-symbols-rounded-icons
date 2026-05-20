import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-chrome-reader-mode-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm360-80h280v-480H520v480Zm210-120q13 0 21.5-8.5T760-390q0-13-8.5-21.5T730-420H590q-13 0-21.5 8.5T560-390q0 13 8.5 21.5T590-360h140Zm0-100q13 0 21.5-8.5T760-490q0-13-8.5-21.5T730-520H590q-13 0-21.5 8.5T560-490q0 13 8.5 21.5T590-460h140Zm0-100q13 0 21.5-8.5T760-590q0-13-8.5-21.5T730-620H590q-13 0-21.5 8.5T560-590q0 13 8.5 21.5T590-560h140Z"/>
</svg>`,
})
export class MsrfChromeReaderModeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
