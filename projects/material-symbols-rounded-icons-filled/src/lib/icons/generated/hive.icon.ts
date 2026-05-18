import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-hive-icon',
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
  <path d="M651-500h134l46-81q11-18 11-39t-11-39l-23-40q-11-19-29.5-30T738-740h-87l-68 120 68 120ZM413-360h134l68-120-68-120H413l-68 120 68 120Zm0-280h134l68-120-45-79q-11-19-29.5-30T500-880h-40q-22 0-40.5 11T390-839l-45 79 68 120Zm-39 20-65-120h-87q-22 0-40.5 11T152-699l-23 40q-11 18-11 39t11 39l46 81h134l65-120Zm0 280-65-120H175l-46 81q-11 18-11 39t11 39l23 40q11 19 29.5 30t40.5 11h87l65-120Zm39 20-68 120 49 81q11 18 29 28.5T462-80h38q22 0 40.5-11t29.5-30l45-79-68-120H413Zm238 100h87q22 0 40.5-11t29.5-30l23-40q11-18 11-39t-11-39l-46-81H651l-68 120 68 120Z"/>
</svg>`,
})
export class MsrfHiveIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
