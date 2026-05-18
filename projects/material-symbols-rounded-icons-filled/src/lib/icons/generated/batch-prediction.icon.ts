import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-batch-prediction-icon',
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
  <path d="M280-80q-33 0-56.5-23.5T200-160v-400q0-33 23.5-56.5T280-640h400q33 0 56.5 23.5T760-560v400q0 33-23.5 56.5T680-80H280Zm160-120v20q0 17 11.5 28.5T480-140q17 0 28.5-11.5T520-180v-20h-80Zm0-40h80q0-23 15.5-46t34.5-47q19-25 34.5-51t15.5-56q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 30 15.5 56t34.5 51q19 24 34.5 47t15.5 46ZM240-700q0-25 17.5-42.5T300-760h360q25 0 42.5 17.5T720-700H240Zm40-120q0-25 17.5-42.5T340-880h280q25 0 42.5 17.5T680-820H280Z"/>
</svg>`,
})
export class MsrfBatchPredictionIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
