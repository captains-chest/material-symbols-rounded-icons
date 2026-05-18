import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-view-headline-icon',
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
  <path d="M199-360q-17 0-28-11.5T160-400q0-17 11.5-28.5T200-440h561q17 0 28 11.5t11 28.5q0 17-11.5 28.5T760-360H199Zm0 160q-17 0-28-11.5T160-240q0-17 11.5-28.5T200-280h561q17 0 28 11.5t11 28.5q0 17-11.5 28.5T760-200H199Zm0-320q-17 0-28-11.5T160-560q0-17 11.5-28.5T200-600h561q17 0 28 11.5t11 28.5q0 17-11.5 28.5T760-520H199Zm0-160q-17 0-28-11.5T160-720q0-17 11.5-28.5T200-760h561q17 0 28 11.5t11 28.5q0 17-11.5 28.5T760-680H199Z"/>
</svg>`,
})
export class MsrfViewHeadlineIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
