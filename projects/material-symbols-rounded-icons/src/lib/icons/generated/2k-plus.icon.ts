import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-2k-plus-icon',
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
  <path d="M660-460v40q0 8 6 14t14 6q8 0 14-6t6-14v-40h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40v-40q0-8-6-14t-14-6q-8 0-14 6t-6 14v40h-40q-8 0-14 6t-6 14q0 8 6 14t14 6h40Zm-160 10 61 79q2 3 23 11 18 0 26-16.5t-3-30.5l-57-73 57-74q11-14 3-30t-26-16q-7 0-13 3t-10 8l-61 79v-60q0-13-8.5-21.5T470-600q-13 0-21.5 8.5T440-570v180q0 13 8.5 21.5T470-360q13 0 21.5-8.5T500-390v-60Zm-200 30v-40h60q17 0 28.5-11.5T400-500v-60q0-17-11.5-28.5T360-600h-90q-13 0-21.5 8.5T240-570q0 13 8.5 21.5T270-540h70v40h-60q-17 0-28.5 11.5T240-460v70q0 13 8.5 21.5T270-360h100q13 0 21.5-8.5T400-390q0-13-8.5-21.5T370-420h-70ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
</svg>`,
})
export class Msr2kPlusIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
