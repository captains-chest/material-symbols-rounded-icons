import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-markdown-icon',
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
  <path d="m610-475-27-27q-9-9-21-8.5t-21 9.5q-9 9-9 21t9 21l71 71q12 12 28 12t28-12l71-71q9-9 9-21t-9-21q-9-9-21.5-9t-21.5 9l-26 26v-95q0-13-8.5-21.5T640-600q-13 0-21.5 8.5T610-570v95ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Zm120-300h40v90q0 13 8.5 21.5T350-420q13 0 21.5-8.5T380-450v-90h40v150q0 13 8.5 21.5T450-360q13 0 21.5-8.5T480-390v-170q0-17-11.5-28.5T440-600H260q-17 0-28.5 11.5T220-560v170q0 13 8.5 21.5T250-360q13 0 21.5-8.5T280-390v-150Z"/>
</svg>`,
})
export class MsrMarkdownIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
