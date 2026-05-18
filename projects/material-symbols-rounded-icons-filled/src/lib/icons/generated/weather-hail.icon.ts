import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-weather-hail-icon',
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
  <path d="m546-86-32 32q-6 6-14 6t-14-6l-32-32q-6-6-6-14t6-14l32-32q6-6 14-6t14 6l32 32q6 6 6 14t-6 14Zm-205-35q-9-9-9-21t9-21l76-76q9-9 21-9t21 9q9 9 9 21t-9 21l-76 76q-9 9-21 9t-21-9Zm325-85-32 32q-6 6-14 6t-14-6l-32-32q-6-6-6-14t6-14l32-32q6-6 14-6t14 6l32 32q6 6 6 14t-6 14Zm-360 0-32 32q-6 6-14 6t-14-6l-32-32q-6-6-6-14t6-14l32-32q6-6 14-6t14 6l32 32q6 6 6 14t-6 14Zm-6-114q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Z"/>
</svg>`,
})
export class MsrfWeatherHailIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
