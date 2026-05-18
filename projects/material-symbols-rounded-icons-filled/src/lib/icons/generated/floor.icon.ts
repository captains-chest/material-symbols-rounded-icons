import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-floor-icon',
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
  <path d="M260-160v-140q0-17 11.5-28.5T300-340h140v-140q0-17 11.5-28.5T480-520h140v-140q0-17 11.5-28.5T660-700h140v-100q0-17 11.5-28.5T840-840q17 0 28.5 11.5T880-800v140q0 17-11.5 28.5T840-620H700v140q0 17-11.5 28.5T660-440H520v140q0 17-11.5 28.5T480-260H340v140q0 17-11.5 28.5T300-80H160q-17 0-28.5-11.5T120-120q0-17 11.5-28.5T160-160h100Z"/>
</svg>`,
})
export class MsrfFloorIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
