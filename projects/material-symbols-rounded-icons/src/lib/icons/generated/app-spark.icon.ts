import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-app-spark-icon',
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
  <path d="M200-280v80-560 480Zm480 160H280q-66 0-113-47t-47-113v-400q0-66 47-113t113-47h161q17 0 28.5 11.5T481-800q0 17-11.5 28.5T441-760H280q-33 0-56.5 23.5T200-680v400q0 33 23.5 56.5T280-200h400q33 0 56.5-23.5T760-280v-161q0-17 11.5-28.5T800-481q17 0 28.5 11.5T840-441v161q0 66-47 113t-113 47Zm60-440q-6 0-8-6-16-61-60.5-105.5T566-732q-6-2-6-8 0-7 6-8 61-16 105.5-60.5T732-914q2-6 8-6t8 6q16 61 60.5 105.5T914-748q6 1 6 8 0 6-6 8-61 16-105.5 60.5T748-566q-1 6-8 6Z"/>
</svg>`,
})
export class MsrAppSparkIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
