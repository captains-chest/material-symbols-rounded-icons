import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-settings-remote-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M360-40q-17 0-28.5-11.5T320-80v-480q0-17 11.5-28.5T360-600h240q17 0 28.5 11.5T640-560v480q0 17-11.5 28.5T600-40H360Zm120-350q21 0 35.5-14.5T530-440q0-21-14.5-35.5T480-490q-21 0-35.5 14.5T430-440q0 21 14.5 35.5T480-390Zm0-330q-30 0-58 8t-53 25q-14 9-31 8.5T310-690q-12-12-11.5-28t13.5-26q36-27 79-41.5t89-14.5q46 0 89 14.5t79 41.5q13 10 13.5 26T650-690q-11 11-27 12t-30-8q-25-17-54-25.5t-59-8.5Zm0-160q-62 0-119 19.5T257-803q-14 11-31 11.5T197-803q-12-12-12-29t14-28q60-48 131.5-74T480-960q78 0 150 25.5T760-859q13 11 13.5 28T762-802q-11 11-27.5 11.5T705-801q-48-39-105-59t-120-20Zm-80 760h160v-400H400v400Zm0 0h160-160Z"/>
</svg>`,
})
export class MsrSettingsRemoteIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
