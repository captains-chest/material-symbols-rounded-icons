import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-humidity-helper-icon',
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
  <path d="M400-80q-133 0-226.5-92T80-396q0-63 24.5-120.5T174-618l170-167q23-23 56-23t56 23l170 167q45 44 69.5 101.5T720-396q0 132-93.5 224T400-80Zm340-480q0-75-52.5-127.5T560-740q75 0 127.5-52.5T740-920q0 75 52.5 127.5T920-740q-75 0-127.5 52.5T740-560Z"/>
</svg>`,
})
export class MsrfHumidityHelperIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
