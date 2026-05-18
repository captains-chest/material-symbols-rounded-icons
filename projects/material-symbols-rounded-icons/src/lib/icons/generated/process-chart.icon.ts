import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-process-chart-icon',
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
  <path d="M96-240q-15-8-20.5-23.5T78-294l204-408q8-15 23.5-20.5T336-720q15 8 20.5 23.5T354-666L150-258q-8 15-23.5 20.5T96-240Zm264 0q-15-8-20.5-23.5T342-294l204-408q8-15 23.5-20.5T600-720q15 8 20.5 23.5T618-666L414-258q-8 15-23.5 20.5T360-240Zm264 0q-15-8-20.5-23.5T606-294l204-408q8-15 23.5-20.5T864-720q15 8 20.5 23.5T882-666L678-258q-8 15-23.5 20.5T624-240Z"/>
</svg>`,
})
export class MsrProcessChartIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
