import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-fertile-icon',
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
  <path d="M533-820q29 34 55 69t50 72l178-133q9-7 20-8t22 4q11 5 16.5 15t5.5 21v300q0 83-31.5 156T763-197q-54 54-127 85.5T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480v-300q0-11 5.5-21t16.5-15q11-5 22-4t20 8l177 133q24-37 50.5-72t55.5-69q10-12 24-18.5t29-6.5q15 0 29 6.5t24 18.5Zm-53 660q134 0 227-93t93-227v-220L616-562q-45-72-73-114t-63-84q-35 43-65 87t-71 111L160-700v220q0 134 93 227t227 93Zm0-300Z"/>
</svg>`,
})
export class MsrFertileIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
