import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-reorder-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M160-200q-17 0-28.5-11.5T120-240q0-17 11.5-28.5T160-280h640q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H160Zm0-160q-17 0-28.5-11.5T120-400q0-17 11.5-28.5T160-440h640q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360H160Zm0-160q-17 0-28.5-11.5T120-560q0-17 11.5-28.5T160-600h640q17 0 28.5 11.5T840-560q0 17-11.5 28.5T800-520H160Zm0-160q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h640q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H160Z"/>
</svg>`,
})
export class MsrfReorderIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
