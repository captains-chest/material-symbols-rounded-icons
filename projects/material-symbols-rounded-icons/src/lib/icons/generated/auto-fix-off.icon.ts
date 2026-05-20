import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-auto-fix-off-icon',
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
  [attr.viewBox]="'0 0 24 24'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="m19.55 6.025-.5-1.075-1.075-.5Q17.7 4.325 17.7 4t.275-.45l1.075-.5.5-1.075q.125-.275.45-.275t.45.275l.5 1.075 1.075.5q.275.125.275.45t-.275.45l-1.075.5-.5 1.075q-.125.275-.45.275t-.45-.275Zm-4 6.675L11.3 8.45l2.15-2.15q.3-.3.725-.3t.725.3l2.8 2.8q.3.3.3.725t-.3.725Zm3.55 9.2-6.4-6.35-6.15 6.15q-.3.3-.725.3t-.725-.3l-2.8-2.85q-.275-.275-.275-.7 0-.425.275-.7l6.15-6.15L2.1 4.9q-.275-.275-.288-.688Q1.8 3.8 2.1 3.5q.275-.275.7-.275.425 0 .7.275l17 17q.275.275.288.688.012.412-.288.712-.275.275-.688.275-.412 0-.712-.275ZM5.85 19.6l5.45-5.5-1.4-1.4-5.5 5.45Zm0 0L4.4 18.15l1.45 1.45Z"/>
</svg>`,
})
export class MsrAutoFixOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
