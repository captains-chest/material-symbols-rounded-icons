import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-contrast-circle-icon',
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
  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-64-24.5-122.5T706-706L254-254q45 45 103.5 69.5T480-160Zm30-160q-13 0-21.5-8.5T480-350q0-13 8.5-21.5T510-380h140q13 0 21.5 8.5T680-350q0 13-8.5 21.5T650-320H510ZM320-580v50q0 13 8.5 21.5T350-500q13 0 21.5-8.5T380-530v-50h50q13 0 21.5-8.5T460-610q0-13-8.5-21.5T430-640h-50v-50q0-13-8.5-21.5T350-720q-13 0-21.5 8.5T320-690v50h-50q-13 0-21.5 8.5T240-610q0 13 8.5 21.5T270-580h50Z"/>
</svg>`,
})
export class MsrContrastCircleIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
