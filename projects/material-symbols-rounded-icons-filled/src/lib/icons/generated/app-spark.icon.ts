import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-app-spark-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M740-560q-6 0-8-6-16-61-60.5-105.5T566-732q-6-2-6-8 0-7 6-8 61-16 105.5-60.5T732-914q2-6 8-6t8 6q16 61 60.5 105.5T914-748q6 1 6 8 0 6-6 8-61 16-105.5 60.5T748-566q-1 6-8 6Zm-60 440H280q-66 0-113-47t-47-113v-400q0-66 47-113t113-47h187q12 0 19 9.5t3 21.5q-18 67-1 134.5T556-556q51 51 118.5 68t134.5-1q12-3 21.5 3.5T840-467v187q0 66-47 113t-113 47Z"/>
</svg>`,
})
export class MsrfAppSparkIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
