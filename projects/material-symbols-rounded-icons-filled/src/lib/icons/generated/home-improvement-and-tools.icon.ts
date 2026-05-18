import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-home-improvement-and-tools-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M318-880h324q25 0 36 21.5t-3 41.5l-75 105v152H360v-152l-75-105q-14-20-3-41.5t36-21.5Zm42 400h240v80H360v-80Zm0 160h240v87q0 16-6 30.5T577-177l-69 69q-6 6-13 8.5T480-97q-8 0-15-2.5t-13-8.5l-69-69q-11-11-17-25.5t-6-30.5v-87Z"/>
</svg>`,
})
export class MsrfHomeImprovementAndToolsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
